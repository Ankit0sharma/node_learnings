//Joi is implemented here
const joiMiddleware = require("../../middleware/joi.middleware");
const joiSchemas = require("../../lib/utils/joi.schemas");
const passport = require("passport")

const passportMiddleware = require("../../middleware/passport.middleware")

const employeeSignupComponent = require("../../components/v1/employee_crud/signup");
const employeeLoginComponent = require("../../components/v1/employee_crud/signin");
const seDataComponent = require("../../components/v1/employee_crud/seData");
const hrDataComponent = require("../../components/v1/employee_crud/hrData");

const checkRole = require("../../middleware/role.middleware");

const employeeRouter = require("express").Router()

// Software engineering Registration Route
employeeRouter.post("/register_se", joiMiddleware.joiBodyMiddleware(joiSchemas.signUp), (req, res) => {
    employeeSignupComponent(req, "se", res);
});

//Marketer Registration Route
employeeRouter.post("/register_marketer", joiMiddleware.joiBodyMiddleware(joiSchemas.signUp), async (req, res) => {
    await employeeSignupComponent(req, "marketer", res);
});

//Human resource Registration route
employeeRouter.post("/register_hr", joiMiddleware.joiBodyMiddleware(joiSchemas.signUp), async (req, res) => {
    await employeeSignupComponent(req, "HR", res);
});

// Software engineers Login Route
employeeRouter.post("/login_se", joiMiddleware.joiBodyMiddleware(joiSchemas.signIn), async (req, res) => {
    await employeeLoginComponent(req, "se", res);
});

// Human Resource Login Route
employeeRouter.post("/login_hr", joiMiddleware.joiBodyMiddleware(joiSchemas.signIn), async (req, res) => {
    await employeeLoginComponent(req, "HR", res);
});

// Marketer Login Route
employeeRouter.post("/login_marketer", joiMiddleware.joiBodyMiddleware(joiSchemas.signIn), async (req, res) => {
    await employeeLoginComponent(req, "marketer", res);
});

//Protected route with authentication and authorization
// employeeRouter.get("/se_protected/:id", passport.authenticate("jwt", { session: false }), checkRole(["se"]), seDataComponent);

employeeRouter.get("/se_protected", passportMiddleware.jwtAuth, checkRole, seDataComponent);

employeeRouter.get("/hr_protected", passportMiddleware.jwtAuth, checkRole, hrDataComponent);

module.exports = employeeRouter
