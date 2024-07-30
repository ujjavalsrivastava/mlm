const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    console.log(user);
    res.json(req.body);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createUser };
