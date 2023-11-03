const addCompanyComponent = require("../../components/v1/company_crud/addCompany");
const addWorkerComponent = require("../../components/v1/company_crud/addWorker");
const getAllWorkersInfoComponent = require("../../components/v1/company_crud/get.all.worker");

const companyRouter = require("express").Router()

companyRouter.post("/new", addCompanyComponent);
companyRouter.post("/new_worker", addWorkerComponent );
companyRouter.get("/worker_info", getAllWorkersInfoComponent )

module.exports = companyRouter