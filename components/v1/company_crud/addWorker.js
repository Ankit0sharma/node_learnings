const Worker = require("../../../models/worker");

module.exports = async (req, res) => {
    try {
      const worker = await Worker.query().insert(req.body);
      res.status(201).json(worker);
    } catch (error) {
      res.status(500).json({ error: 'Error adding worker' });
    }
  }