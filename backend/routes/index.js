const { Router } = require("express");

const userRouter = require("./user-route");
const productRouter = require("./product-route");
const videoRouter = require("./video-route");
const { auth } = require("../middleware/auth");

const userRoutes = new Router();
userRoutes.use("/user", auth, userRouter);

const productRoutes = new Router();
productRoutes.use("/product", auth, productRouter);

const videoRoutes = new Router();
videoRoutes.use("/vimeo", auth, videoRouter);

module.exports = { userRoutes, productRoutes, videoRoutes };
