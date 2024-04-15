import db from "./db.mjs";

class boatdetails {

      
  async getBoatDetails() {
    const query =
      "SELECT boatdetails.*, boat_owner.* " +
      "FROM boatdetails " +
      "JOIN boat_owner ON boatdetails.boat_owner_id = boat_owner.boat_owner_id " +
      "WHERE boatdetails.soft_delete = 1";

    try {
      const rows = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async editDetails(formDetails) {
    const {
      boatName,
      boatCapacity,
      Bimag1,
      Bimag2,
      Bimag3,
      Bimag4,
      Bimag5,
      size,
      boatDetails_id,
    } = formDetails;
    const values = [
      boatName,
      boatCapacity,
      Bimag1,
      Bimag2,
      Bimag3,
      Bimag4,
      Bimag5,
      size,
      boatDetails_id,
    ];
    const query = "CALL edit_boat_details(?,?,?,?,?,?,?,?,?)";
    try {
      await db.query(query, values);
      return "Data updated successfully";
    } catch (error) {
      console.error("Database query error:", error);
      throw "Database query error";
    }
  }
  async deleteBoatDetails(id) {
    const query = "CALL del_boat_details(?)";
    try {
      await db.query(query, [id]);
      console.log("Data is deleted!");
      return "Data is deleted";
    } catch (error) {
      console.error("Error->", error);
    }
  }
}

export default new boatdetails();
