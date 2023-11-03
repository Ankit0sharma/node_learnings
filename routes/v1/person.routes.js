//One to Many Relationship
const registerPersonComponent = require("../../components/v1/person_crud/registerPerson")
const createPetsComponent = require("../../components/v1/person_crud/createPets")
const detailsOfOwnerAndPetsComponent = require("../../components/v1/person_crud/detailsOwnerAndPets")

const personRouter = require("express").Router()

personRouter.post("person", registerPersonComponent)
personRouter.post("/pets", createPetsComponent)
personRouter.get("/pets_details", detailsOfOwnerAndPetsComponent)

module.exports = personRouter
