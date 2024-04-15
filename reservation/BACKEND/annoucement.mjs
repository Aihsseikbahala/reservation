import db from './db.mjs';

class announcement {

  async insertData(formData) {
    const {
        companyName,
        announcement,
        show_me
    } = formData;
    const query = "CALL add_announcement(?,?,?)";
    const values = [
        companyName,
        announcement,
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


  async getData() {
    const query = 'CAll show_announcement()';
    try {
        const [result] = await db.query(query);
        return result;
    } catch (error) {
        console.error("Error->", error);
    }
}
async editData(formDataEdit) {
  const {
    companyName,
    announcement,
    announcement_id
  } = formDataEdit;

  const values = [
    companyName,
    announcement,
    announcement_id
  ];
  const query = 'CALL edit_announcement(?,?,?)';
  try {
    await db.query(query, values);
    return 'Data inserted successfully';
  } catch (error) {
    console.error('Database query error:', error);
    throw 'Database query error';
  }
}




  async deleteData(id) {
    const query = 'CALL del_announcement(?)';

    try {
      await db.query(query, [id]);
      return 'Data deleted successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
}

export default new  announcement();