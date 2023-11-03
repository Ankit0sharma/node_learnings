const Person = require("../../../models/person");

module.exports = async (req, res) => {
  try {
    const personsWithPets = await Person.query()
      .withGraphFetched("[pets]")
      .select("name", "email")
      .whereExists(Person.relatedQuery("pets"))
      .orderBy("name");
    return res
      .status(200)
      .json({ success: true, petsAndOwnerDetails: personsWithPets });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
