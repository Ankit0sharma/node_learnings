const Product = require("../../../models/product");
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'bitcot',
    database: 'objectionJS_project',
  },
});

module.exports = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.query().where({ id: productId }).first();
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    //SQL function is used here
    const query = 'SELECT calculate_total_price(?, ?) as total_price';
    const params = [product.quantity, product.price];
    const result = await knex.raw(query, params);
    const totalPrice = result.rows[0].total_price;
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}