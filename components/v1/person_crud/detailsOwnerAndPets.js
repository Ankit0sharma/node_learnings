const { ErrorHandler } = require('../../../lib/utils/custom.error');
const Person = require("../../../models/person");

module.exports = async (req, res) => {
  try {
    const personsWithPets = await Person.query()
      .withGraphFetched("[pets]")
      .select("name", "email")
      .whereExists(Person.relatedQuery("pets"))
      .orderBy("name");
      return res.success(personsWithPets);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
};
