import db from './db.mjs';

class notifcation {

    async getData() {
        const query = 'CALL show_tourist()'; 
        try {
          const [result] = await db.query(query);
          return result; 
        } catch (error) {
          console.error('Database query error:', error);
          throw 'Database query error';
        }
      }


    async deleteData(id) {
        const query = 'UPDATE `notifcation` SET `show_me`=0 WHERE id = ?';
        try {
            await db.query(query, [id]);
            return 'Data deleted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
}

export default new notifcation();