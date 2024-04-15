import db from './db.mjs';

class personel {
    async insertData(formData) {
        const
            {
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
            } = formData;
        const values = [personel_fname, personel_lname, personel_mname, personel_email, personel_address, personel_gender, personel_dob, personel_nationality, personel_cpnum, personel_img];
        const query = 'CALL add_personel(?,?,?,?,?,?,?,?,?,?)';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }

    async getData() {
        const query = 'CAll show_personel()';
        try {
            const [result] = await db.query(query);
            return result;
        } catch (error) {
            console.error("Error->", error);
        }
    }
    async editData(formDataEdit) {
        const
            {
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
                personel_id
            } = formDataEdit;
        const values = [personel_fname, personel_lname, personel_mname, personel_email, personel_address, personel_gender, personel_dob, personel_nationality, personel_cpnum, personel_img, personel_id];
        const query = 'CALL edit_personel(?,?,?,?,?,?,?,?,?,?,?)';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async deleteData(id) {
        const query = 'CALL del_personel(?)';
        try {
          await db.query(query, [id]);
          return 'Data deleted successfully';
        } catch (error) {
          console.error('Database query error:', error);
          throw 'Database query error';
        }
      }
    }

export default new personel();