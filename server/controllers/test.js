const Food = require('../models/test');
const path = require('path');

const Controller = {
  async getFood(req, res) {
    try {
      // Fetch all food items
      const foods = await Food.getFood();

      if (!foods || foods.length === 0) {
        return res.status(404).json({ message: 'No foods found' });
      }

      res.json(foods);
      console.log("foods", foods);
    } catch (error) {
      console.error('Error fetching foods:', error);
      res.status(500).json({ error: 'Failed to fetch foods' });
    }
  }
};

module.exports = Controller;
