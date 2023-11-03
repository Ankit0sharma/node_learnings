const Product = require("../../../models/product");

module.exports =  async (req, res) => {
    try {
      const { name, price, quantity } = req.body;
      if (!name || !price || !quantity) {
        return res.status(400).json({ error: 'Name, price, and quantity are required' });
      }
      const product = await Product.query().insert({
        name,
        price,
        quantity,
      });
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }