import db from "./db.mjs";

class Reservation {
  async getData() {
    const query = 'select * from reservations where show_me = 1';
    try {
      const result = await db.query(query);
      return result;
    } catch (error) {
      console.error("Error->", error);
    }
  }
  async insertData(formData) {
    const {
        Tourist_id,
        fname,
        lname,
        destination,
        boatName,
        tourguide,
        reservationDate,
        duration,
        status,
        tg_id,
        boat_owner_id,
        totalPrice,
        show_me
    } = formData;

    const query = 'CALL add_reservation(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        Tourist_id,
        fname,
        lname,
        destination,
        boatName,
        tourguide,
        reservationDate,
        duration,
        status,
        tg_id,
        boat_owner_id,
        totalPrice,
        show_me
    ];

    try {
        await db.query(query, values);
        return 'Data inserted successfully';
    } catch (error) {
        console.error('Database query error:', error);
        throw 'Database query error';
    }
}

  async deleteData(id) {
    const query = 'UPDATE reservations set show_me=0 where id=?';
    try {
      await db.query(query, [id]);
      console.log("Data is deleted!");
      return 'Data is deleted';
    } catch (error) {
      console.error('Error->', error);
    }
  }
  async editData(formData) {
    const
      {
        Tourist_id,
        reserveDate,
        boatName,
      } = formData;
      const values = [
        Tourist_id,
        reserveDate,
        boatName,
      ];
      const query = 'CALL edit_reservation(?,?,?)';
    try {
      await db.query(query, values);
      return 'Data updated successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }

  async Gcash(formData) {
    const
      {
        email,
        totalPrice,
      } = formData;
      const values = [
        email,
        totalPrice,
      ];
      const query = 'CALL edit_Gcash(?,?)';
    try {
      await db.query(query, values);
      return 'Data updated successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
}

export default new Reservation();