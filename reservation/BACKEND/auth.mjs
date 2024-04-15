import db from "./db.mjs";

class Auth {
  async getAdmin(username, password) {
    const query = "SELECT * FROM admin WHERE username = ? AND password = ?";
    const values = [username, password];

    try {
      const rows = await db.query(query, values);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // bolean test
  async readAdmin() {
    const query = "SELECT auth FROM admin";

    try {
      const rows = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getBoatOwner(boat_owner_email, password) {
    const query =
      "SELECT boat_owner_id FROM boat_owner WHERE boat_owner_email = ? AND password = ?";
    const values = [boat_owner_email, password];
  
    try {
      const rows = await db.query(query, values);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  

  // tourguide
  async getTourguide(tg_email, password) {
    const query =
      "SELECT tg_id FROM tour_guide WHERE tg_email = ? AND password = ?";
    const values = [tg_email, password];

    try {
      const rows = await db.query(query, values);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTourist(email,password) {
    const query =
      "SELECT * FROM touristaccount WHERE email = ? AND password = ?";
    const values = [email, password];

    try {
      const rows = await db.query(query, values);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getPersonel(email,password){
    const query =
    "SELECT * FROM personel WHERE personel_email = ? AND password = ?";
  const values = [email, password];

  try {
    const rows = await db.query(query, values);

    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
  }
}

export default new Auth();
