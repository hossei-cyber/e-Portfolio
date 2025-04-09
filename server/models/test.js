const pool = require('../app.js'); // Ensure this points to the correct file

const Food = {
  async getFood() {
    const query = `
      SELECT *
      FROM foods
    `;

    try {
      const result = await pool.query(query);
      if (result.rows.length === 0) {
        return null; // No food items found
      }
      return result.rows; // Return the food data
    } catch (error) {
      throw new Error('Error fetching food: ' + error.message);
    }
  },
};

module.exports = Food;
