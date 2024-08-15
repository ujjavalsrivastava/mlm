const { Router } = require("express");

const userRouter = require("./user-route");
const productRouter = require("./product-route");
const { tryCatch } = require("../utils/helper");
const { auth } = require("../middleware/auth");

const userRoutes = new Router();
userRoutes.use("/user", tryCatch(auth), userRouter);

const productRoutes = new Router();
productRoutes.use("/product", tryCatch(auth), productRouter);

module.exports = { userRoutes, productRoutes };
