import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import ip from "ip";
import CRUD from "./crud.mjs";
import Auth from "./auth.mjs";
import Gcash from "./Gcash.mjs";
import BOATOWNERCRUD from "./boatowner.mjs";
import TOURGUIDECRUD from "./tourguide.mjs";
import BOATDETAILS from "./Boatdetails.mjs";
import PERSONELCRUD from "./personel.mjs";
import NOTIFICATION from "./notification.mjs";
import ANNOUNCEMENT from "./annoucement.mjs";
import RESERVATION from "./reservation.mjs";
import MAINTENANCE from "./maintenance.mjs";


class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.port = 3000;


    const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, "../src/assets/uploads/");
      },
      filename: (req, file, callback) => {
        const extname = path.extname(file.originalname);
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        const filename = `${timestamp}-${randomString}${extname}`;
        callback(null, filename);
      },
    });
    

    this.upload = multer({ storage });

    this.setupRoutes();
  }

  setupRoutes() {
    const app = this.app;
    //Routes for admin and auth
    app.post("/api/auth", this.handleGetAuth.bind(this)); //authentication
    app.post("/api/authTourist", this.handleGetAuthTourist.bind(this)); //authentication


    // Routes for boat Owner auth 
    app.post('/api/getBoatOwnerAuth', this.handleGetOwnerAuth.bind(this));
    app.post('/api/updateBoatOwnerAuth', this.handleUpdateBoatOwnerAuth.bind(this));  //update
    app.get('/api/boatOwnerMode',this.handleBoatOwnerMode.bind(this));//select

    // Routes for Tour guide routes
    app.post('/api/getTourguideAuth', this.handleGetTourguideAuth.bind(this));
    app.post('/api/updateTourguideAuth', this.handleUpdateTourguideAuth.bind(this));  //update


// reservation
    app.post("/api/insert/reservation",this.handleInsertReservation.bind(this));
    app.get("/api/getReservation", this.handleGetReservation.bind(this));
    app.post("/api/reservationDelete/:id", this.handleReservationDelete.bind(this));
    app.put("/api/editReservation",this.handleEditReservation.bind(this));

   

    //Routes for Tourist
    app.post("/api/insert",this.upload.single("profilePicture"),this.handleInsert.bind(this));
    app.get("/api/get", this.handleGet.bind(this));
    app.put("/api/editTourist",this.upload.single("profilePicture"),this.handleEditTourist.bind(this));
    app.post("/api/delete/:id", this.handleDelete.bind(this));

    // Routes for boat owner
    app.post("/api/insert/boatowner",this.upload.single("boat_owner_img"),this.handleInsertBoatOwner.bind(this));
    app.get("/api/getboatowner", this.handleGetBoatOwner.bind(this));
    app.post("/api/deleteboatowner/:id", this.handleDeleteBoatOwner.bind(this));
    app.post("/api/editboatowner",this.upload.single("boat_owner_img"),this.handleEditBoatOwner.bind(this));

    // personel
    app.post("/api/insert/personel", this.upload.single("personel_img"), this.handleInsertPersonel.bind(this));
    app.get("/api/getpersonel", this.handleGetPersonel.bind(this));
    app.post("/api/deletepersonel/:id", this.handleDeletePersonel.bind(this));
    app.post("/api/editpersonel", this.upload.single("personel_img"), this.handleEditPersonel.bind(this));
    
    app.post("/api/maintenance", this.handleMaintenance.bind(this));
    app.get("/api/getmaintenance", this.handlegetMaintenance.bind(this));

    //routes for BoatDetails
    // app.get("/api/getBoat", this.handleGetBoat.bind(this));
    app.get("/api/getBoatDetails", this.handleGetBoatDetails.bind(this));
    app.post(
      '/api/insert/boatdetails',
      this.upload.fields([
        { name: 'Bimag1' },
        { name: 'Bimag2' },
        { name: 'Bimag3' },
        { name: 'Bimag4' },
        { name: 'Bimag5' },
      ]),
      this.handleInsertBoatdetails.bind(this)
    );
    app.post(
      '/api/boatEditdetails',
      this.upload.fields([
        { name: 'Bimag1' },
        { name: 'Bimag2' },
        { name: 'Bimag3' },
        { name: 'Bimag4' },
        { name: 'Bimag5' },
      ]),
      this.handleEditBoatdetails.bind(this)
    );
    app.post("/api/deleteBoatDetails/:id", this.handleDeleteBoatDetails.bind(this));



    // Routes for tour guide
    app.get("/api/gettourguide", this.handleGetTourGuide.bind(this));
    app.post("/api/insert/tourguide",this.upload.single("tg_img"),this.handleInsertTourGuide.bind(this));
    app.post("/api/deletetourguide/:id", this.handleDeleteTourGuide.bind(this));
    app.put("/api/edittourguide",this.upload.single("tg_img"),this.handleEditTourGuide.bind(this));

    //Routes for Announcement
    app.get('/api/get/announcement', this.handleGetAnnouncement.bind(this));
    app.post("/api/delete/announcement/:id", this.handleDeleteAnnouncement.bind(this));
    app.post("/api/insert/announcement", this.handleInsertAnnouncement.bind(this));
    app.post("/api/edit/announcement", this.handleEditAnnouncement.bind(this));  

    // Routes for notification
    app.get('/api/get/notification', this.handleGetNotification.bind(this));
    app.post('/api/delete/notification/:id', this.handleDeleteNotification.bind(this));

    // gcash
    app.get('/api/gcash',this.handleGcash.bind(this));
  }
   async handleGcash(req,res){
    try {
      const data = await Gcash.getGcash();

      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
   }
   //login auth
   async handleGetAuth(req, res) {
    const { username, password } = req.body;
   
    try {
      const dataAdmin = await Auth.getAdmin(username, password);
      const dataOwner = await Auth.getBoatOwner(username, password);
      const dataTourguide = await Auth.getTourguide(username,password);
      const dataPersonel = await Auth.getPersonel(username,password);

  
      if (dataAdmin.length > 0) {
        res.json({ authenticated: true, user: 'admin' });
      } else if (dataOwner.length > 0) {
        const { boat_owner_id } = dataOwner[0];
        let id=boat_owner_id;
        res.json({ authenticated: true, user: 'boatOwner',id });
      } else if (dataTourguide.length > 0) {
        const { tg_id } = dataTourguide[0];
        let id=tg_id;
        res.json({ authenticated: true, user: 'TourGuidePage',id });
      }  else if (dataPersonel.length > 0) {
        const { personel_id } = dataPersonel[0];
        let id=personel_id;
        res.json({ authenticated: true, user: 'PersonelPage',id });
      } else {
        res.json({ authenticated: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  async handleGetAuthTourist(req, res) {
    const { username, password } = req.body;
   
    try {
      const dataTourist = await Auth.getTourist(username, password);
     
  
      if ( dataTourist.length > 0) {
        const { Tourist_id } = dataTourist[0];
        let id=Tourist_id;
        res.json({ authenticated: true, user: 'tourist',id });
      } else {
        res.json({ authenticated: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  
  // reservation
  async handleInsertReservation(req,res){
    
    const formData = req.body;
    const {
      email,
      totalPrice,
      } = req.body;

    try {
        const result = await RESERVATION.insertData(formData);
        await RESERVATION.Gcash({email,totalPrice});

        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error });
    }
  }
  
  async handleGetReservation (req,res){
    try {
      const data = await RESERVATION.getData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }
  async handleReservationDelete(req,res){
    const id = req.params.id;

    try {
      const result = await RESERVATION.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async handleEditReservation(req,res){
    const {
    Tourist_id,
    reserveDate,
    boatName,
 
    } = req.body;
   
    try {
      const result = await RESERVATION.editData({
        Tourist_id,
        reserveDate,
        boatName,
      });

      console.log("Database update result:", result); // Add this line for logging

      res.json({ message: result });
    } catch (error) {
      console.error("Error in route handler:", error); // Add this line for logging
      res.status(500).json({ error });
    }
  }

  // tourist
  async handleInsert(req, res) {
    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender,
      phone,
      address,
      tourist_del,
    } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    try {
      const result = await CRUD.insertData({
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        phone,
        address,
        profilePicture,
        tourist_del,
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleGet(req, res) {
    try {
      const data = await CRUD.getData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }
  async handleEditTourist(req, res) {
    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender,
      phone,
      address,
      Tourist_id,
    } = req.body;
    const profilePicture = req.file ? req.file.filename : null;
    try {
      const result = await CRUD.editData({
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        phone,
        address,
        profilePicture,
        Tourist_id,
      });

      console.log("Database update result:", result); // Add this line for logging

      res.json({ message: result });
    } catch (error) {
      console.error("Error in route handler:", error); // Add this line for logging
      res.status(500).json({ error });
    }
  }
  async handleDelete(req, res) {
    const id = req.params.id;

    try {
      const result = await CRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // functions for boat owner

  async handleGetOwnerAuth(req,res){
    const { boat_owner_email, password } = req.body;
  
    try {
      const data = await Auth.getBoatOwner(boat_owner_email, password);
      
      if (data.length > 0) {
        res.json({ authenticated: true, user: data[0] });
      } else {
        res.json({ authenticated: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }

  async handleUpdateBoatOwnerAuth(req,res){
      const {auth,boat_owner_email}=req.body;
      const result = await Auth.updateBoatOwnerAuth(auth,boat_owner_email);
  }


  async handleBoatOwnerMode(req,res){
    try {
      const data = await Auth.boatOwnerMode();
  
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }

  async handleInsertBoatOwner(req, res) {
    const {
      boat_owner_fname,
      boat_owner_lname,
      boat_owner_mname,
      boat_owner_email,
      boat_owner_address,
      boat_owner_gender,
      boat_owner_dob,
      boat_owner_nationality,
      boat_owner_cpnum,
    } = req.body;
    const boat_owner_img = req.file ? req.file.filename : null;
    try {
      const result = await BOATOWNERCRUD.insertData({
        boat_owner_fname,
        boat_owner_lname,
        boat_owner_mname,
        boat_owner_email,
        boat_owner_address,
        boat_owner_gender,
        boat_owner_dob,
        boat_owner_nationality,
        boat_owner_cpnum,
        boat_owner_img,
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async handleGetBoatOwner(req, res) {
    try {
      const data = await BOATOWNERCRUD.getData();

      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }
  async handleEditBoatOwner(req, res) {
    const {
      boat_owner_fname,
      boat_owner_lname,
      boat_owner_mname,
      boat_owner_email,
      boat_owner_address,
      boat_owner_gender,
      boat_owner_dob,
      boat_owner_nationality,
      boat_owner_cpnum,
      boat_owner_id,
    } = req.body;
    const boat_owner_img = req.file ? req.file.filename : null;
    try {
      const result = await BOATOWNERCRUD.editData({
        boat_owner_fname,
        boat_owner_lname,
        boat_owner_mname,
        boat_owner_email,
        boat_owner_address,
        boat_owner_gender,
        boat_owner_dob,
        boat_owner_nationality,
        boat_owner_cpnum,
        boat_owner_img,
        boat_owner_id,
      });

      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleDeleteBoatOwner(req, res) {
    const id = req.params.id;
    try {
      const result = await BOATOWNERCRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }

  // boat details
  // async handleGetBoat(req,res){
  //   try {
  //     const data = await BOATDETAILS.getBoat();

  //     res.json(data);
  //   } catch (error) {
  //     res.status(500).json({ error: "Error fetching data" });
  //   }
  // }

  // personel
  async handleInsertPersonel(req, res) {
    const {
      personel_fname,
      personel_lname,
      personel_mname,
      personel_email,
      personel_address,
      personel_gender,
      personel_dob,
      personel_nationality,
      personel_cpnum,
    } = req.body;
    const personel_img = req.file ? req.file.filename : null;
    try {
      const result = await PERSONELCRUD.insertData({
        personel_fname,
        personel_lname,
        personel_mname,
        personel_email,
        personel_address,
        personel_gender,
        personel_dob,
        personel_nationality,
        personel_cpnum,
        personel_img,
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  
  async handleGetPersonel(req, res) {
    try {
      const data = await PERSONELCRUD.getData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }
  
  async handleEditPersonel(req, res) {
    const {
      personel_fname,
      personel_lname,
      personel_mname,
      personel_email,
      personel_address,
      personel_gender,
      personel_dob,
      personel_nationality,
      personel_cpnum,
      personel_id,
    } = req.body;
    const personel_img = req.file ? req.file.filename : null;
    try {
      const result = await PERSONELCRUD.editData({
        personel_fname,
        personel_lname,
        personel_mname,
        personel_email,
        personel_address,
        personel_gender,
        personel_dob,
        personel_nationality,
        personel_cpnum,
        personel_img,
        personel_id,
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  
  async handleDeletePersonel(req, res) {
    const id = req.params.id;
    try {
      const result = await PERSONELCRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }
  //Boat Details 
  async handleGetBoatDetails(req, res) {
    try {
      const data = await BOATDETAILS.getBoatDetails();

      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  }
  
  async handleInsertBoatdetails(req, res) {
    const { boat_owner_id,boatName, boatCapacity,size,soft_delete } = req.body;
    const Bimag1 = req.files['Bimag1'] ? req.files['Bimag1'][0].filename : null;
    const Bimag2 = req.files['Bimag2'] ? req.files['Bimag2'][0].filename : null;
    const Bimag3 = req.files['Bimag3'] ? req.files['Bimag3'][0].filename : null;
    const Bimag4 = req.files['Bimag4'] ? req.files['Bimag4'][0].filename : null;
    const Bimag5 = req.files['Bimag5'] ? req.files['Bimag5'][0].filename : null;
  
    try {
      const result = await BOATOWNERCRUD.insertDetails({
        boat_owner_id,boatName, boatCapacity, Bimag1, Bimag2, Bimag3, Bimag4, Bimag5,size,soft_delete
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleEditBoatdetails(req,res){
    const { boatName, boatCapacity, size, boatDetails_id } = req.body;
    const Bimag1 = req.files['Bimag1'] ? req.files['Bimag1'][0].filename : null;
    const Bimag2 = req.files['Bimag2'] ? req.files['Bimag2'][0].filename : null;
    const Bimag3 = req.files['Bimag3'] ? req.files['Bimag3'][0].filename : null;
    const Bimag4 = req.files['Bimag4'] ? req.files['Bimag4'][0].filename : null;
    const Bimag5 = req.files['Bimag5'] ? req.files['Bimag5'][0].filename : null;
  
    try {
      const result = await BOATDETAILS.editDetails({
        boatName, boatCapacity, Bimag1, Bimag2, Bimag3, Bimag4, Bimag5,size, boatDetails_id
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  } 
  async handleDeleteBoatDetails(req,res){
    const id = req.params.id;
    try {
      const result = await BOATDETAILS.deleteBoatDetails(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }

  // functions for tour guide
  async handleGetTourguideAuth(req,res){
    const { tg_email, password } = req.body;
  
    try {
      const data = await Auth.getTourguide(tg_email, password);
      
      if (data.length > 0) {
        res.json({ authenticated: true, user: data[0] });
      } else {
        res.json({ authenticated: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data' });
    }

  }

  async handleUpdateTourguideAuth(req,res){
    const {auth,tg_email}=req.body;
    const result = await Auth.updateTourguideAuth(auth,tg_email);
  }
  async handleInsertTourGuide(req, res) {
    const {
      tg_fname,
      tg_lname,
      tg_mname,
      tg_email,
      tg_address,
      tg_gender,
      tg_dob,
      tg_status,
      tg_nationality,
      tg_cpnum,
    } = req.body;
    const tg_img = req.file ? req.file.filename : null;
    try {
      const result = await TOURGUIDECRUD.insertData({
        tg_fname,
        tg_lname,
        tg_mname,
        tg_email,
        tg_address,
        tg_gender,
        tg_dob,
        tg_status,
        tg_nationality,
        tg_cpnum,
        tg_img,
      });

      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleGetTourGuide(req, res) {
    try {
      const data = await TOURGUIDECRUD.getData();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
  async handleEditTourGuide(req, res) {
    const {
      tg_fname,
      tg_lname,
      tg_mname,
      tg_email,
      tg_address,
      tg_gender,
      tg_dob,
      tg_status,
      tg_nationality,
      tg_cpnum,
      tg_id,
    } = req.body;
    const tg_img = req.file ? req.file.filename : null;
    try {
      const result = await TOURGUIDECRUD.editData({
        tg_fname,
        tg_lname,
        tg_mname,
        tg_email,
        tg_address,
        tg_gender,
        tg_dob,
        tg_status,
        tg_nationality,
        tg_cpnum,
        tg_img,
        tg_id,
      });

      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleDeleteTourGuide(req, res) {
    const id = req.params.id;
    try {
      const result = await TOURGUIDECRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }

 // Functions for Announcement
 async handleGetAnnouncement(req, res) {
  try {
    const data = await ANNOUNCEMENT.getData();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
async handleDeleteAnnouncement(req, res) {
  const id = req.params.id;
  try {
    const result = await ANNOUNCEMENT.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    console.log(error);
  }
}
async handleInsertAnnouncement(req, res) {
  const {
      companyName,
      announcement,
      show_me
  } = req.body;

  try {
      const result = await ANNOUNCEMENT.insertData({
          companyName,
          announcement,
          show_me
      });
      res.json({ message: result });
  } catch (error) {
      res.status(500).json({ error });
  }
}

async handleEditAnnouncement(req, res) {
  const {
    companyName,
    announcement,
    announcement_id
  } = req.body;
  try {
    const result = await ANNOUNCEMENT.editData({
      companyName,
      announcement,
      announcement_id
    });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  };
}

// Functions for notification
async handleGetNotification(req, res) {
  try {
    const data = await NOTIFICATION.getData();
    res.json([data]);
  } catch (error) {
    console.log(error);
  }
}
async handleDeleteNotification(req, res) {
  const id = req.params.id;
  try {
    const result = await NOTIFICATION.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    console.log(error);
  }
};

async handleMaintenance(req, res) {
  const { boat_id, description } = req.body;
  try {
      const result = await MAINTENANCE.insertData({ description, boat_id });
      res.json({ message: result });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

async handlegetMaintenance(req,res){
  try {
    const data = await MAINTENANCE.getData();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

  
  async handleIPconfig(req, res) {
    const localIpAddress = ip.address();
    res.json({ localIpAddress });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
