import db from "./db.mjs";

class Gcash {
  async getGcash() {
    const query = "SELECT * FROM gcash_accounts";
   
    try {
      const rows = await db.query(query);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // bolean test
 
}

export default new Gcash();
