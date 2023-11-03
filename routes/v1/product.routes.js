const addProductComponent = require("../../components/v1/product_crud/addProduct");
const totalPriceComponent = require("../../components/v1/product_crud/totalPrice");

const productRouter = require("express").Router()

productRouter.post("/new", addProductComponent);
productRouter.get("/total_price/:productId", totalPriceComponent)

module.exports = productRouter