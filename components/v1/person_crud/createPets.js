const { ErrorHandler } = require('../../../lib/utils/custom.error');
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
    return res.success(newPet);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
};
