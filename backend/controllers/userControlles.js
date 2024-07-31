const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { email, name, password, referalCode } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ error: "User with this email already exist" });
    const referedUser = referalCode
      ? await User.findOne({ referalCode })
      : null;
    if (referalCode && !referedUser)
      return res.status(400).json({ error: "Invalid referal code" });
    if (referalCode && referedUser?.level === 8)
      return res
        .status(400)
        .json({ error: "referal is not allowed above level 8" });

    const level = !referalCode ? 1 : referedUser ? referedUser?.level + 1 : 1;

    const userData = {
      name,
      email,
      password,
      level,
      role: level === 1 ? "associate" : "user",
    };
    if (referedUser?._id) {
      userData["upperLevel"] = referedUser._id;
    }

    const savedUser = await new User(userData).save();
    if (level > 1) {
      referedUser.lowerLevel.push(savedUser._id);
      await referedUser.save();
    }
    return res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ error: "email and password required to login", code: 800 });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ error: "User not found", code: 801 });
  const passwordMatched = await bcrypt.compare(password, `${user.password}`);
  if (!passwordMatched)
    return res
      .status(400)
      .json({ error: "email id or password is incorrect", code: 802 });

  const token = jwt.sign(
    { email, userId: user._id, level: user.level },
    process.env.TOKEN_SECRET
  );

  res.json({ message: "Login Successful", token });
};

const getUserProfile = (req, res) => {
  res.json(req.user);
};

const updateProfile = async (req, res) => {
  const user = req.user;
  const { name } = req.body;
  user.name = name;
  await user.save();
  res.json({ message: "user data updated successfully" });
};
module.exports = { createUser, loginHandler, getUserProfile, updateProfile };
