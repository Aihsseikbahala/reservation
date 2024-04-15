import db from './db.mjs';

class Maintenance {

 
async insertData(formMaintenance) {
    const {
        description,
        boat_id
    } = formMaintenance;
    const query = "INSERT INTO maintenance (description, boat_id) VALUES (?, ?)";
    const values = [description, boat_id];

    try {
        // Assuming you have a database connection object named 'db'
        const result = await db.query(query, values);
        return result; // Assuming you want to return the result
    } catch (error) {
        throw error;
    }
}


  async getData() {
    const query = 'CAll show_maintenance()';
    try {
        const [result] = await db.query(query);
        return result;
    } catch (error) {
        console.error("Error->", error);
    }
}
// async editData(formDataEdit) {
//   const {
//     companyName,
//     announcement,
//     announcement_id
//   } = formDataEdit;

//   const values = [
//     companyName,
//     announcement,
//     announcement_id
//   ];
//   const query = 'CALL edit_announcement(?,?,?)';
//   try {
//     await db.query(query, values);
//     return 'Data inserted successfully';
//   } catch (error) {
//     console.error('Database query error:', error);
//     throw 'Database query error';
//   }
// }




//   async deleteData(id) {
//     const query = 'CALL del_announcement(?)';

//     try {
//       await db.query(query, [id]);
//       return 'Data deleted successfully';
//     } catch (error) {
//       console.error('Database query error:', error);
//       throw 'Database query error';
//     }
//   }
}

export default new Maintenance();