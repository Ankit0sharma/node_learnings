const { ErrorHandler } = require('../../../lib/utils/custom.error');
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
      return res.success(product);
    } catch (error) {
      return res.serverError(500, ErrorHandler(error));
    }
  }