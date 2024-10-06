const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const unAuthRoutes = {
  "/api/user/valid?email": true,
  "/api/user/login": true,
  "/api/user/register": true,
  "/api/vimeo/courses": true,
  "/api/product/create/order": true,
  "/api/user/forgot-password": true,
  "/api/user/verify-reset-code": true,
  "/api/user/check-refrealcode?referalCode": true,
};

const auth = async (req, res, next) => {
  const endpoint = req.originalUrl;

  const allowWithoutAuth = unAuthRoutes[endpoint?.split("=")[0]];
  if (allowWithoutAuth) return next();
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const tokenDecoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({
      _id: tokenDecoded.userId,
    });
    if (!user) throw new Error();
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.log("auth.js error");

    res.status(401).json(error);
  }
};

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const tokenDecoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({
      _id: tokenDecoded.userId,
    });
    if (!user) throw new Error();
    if (user.role !== "admin") throw new Error("Non admin user");
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.log("auth.js admin error");
    res.status(401).json(error);
  }
};
module.exports = { auth, adminAuth };
