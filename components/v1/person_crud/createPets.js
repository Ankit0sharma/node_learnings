const Pet = require("../../../models/pet");

module.exports = async (req, res) => {
  try {
    const { name, species, age } = req.body;
    const ownerId = req.params.id;
    const newPet = await Pet.query().insert({
      name,
      species,
      age,
      ownerId,
    });
    return res.status(201).json({ success: true, newPet: newPet });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
