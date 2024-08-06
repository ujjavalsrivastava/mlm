const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
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
    res.status(401).json(error);
  }
};
module.exports = { auth, adminAuth };
