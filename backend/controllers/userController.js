const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateReferralCode } = require("../utils/helper");
const UserPurchase = require("../models/purchase-history-model");
const PercentDistribution = require("../models/percentage-distribution-model");

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

    const userData = {
      name,
      email,
      password,
      referalCode: generateReferralCode(),
    };
    if (referedUser?._id) {
      userData["parentId"] = referedUser._id;
    }
    const savedUser = await new User(userData).save();
    if (referedUser) {
      referedUser.lowerLevel.push(savedUser._id);
      await referedUser.save();
    }
    await UserPurchase({ userId: savedUser._id, currentAmount: 0 }).save();
    await PercentDistribution({ userId: savedUser._id }).save();
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
      .json({ error: "email and password required to login", code: 802 });
  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "User not found", code: 802 });
  const passwordMatched = await bcrypt.compare(password, `${user.password}`);
  if (!passwordMatched)
    return res.json({ error: "email id or password is incorrect", code: 802 });

  const token = jwt.sign({ email, userId: user._id }, process.env.TOKEN_SECRET);

  res.json({ message: "Login Successful", token, code: 801 });
};

const getUserProfile = (req, res) => {
  res.json(req.user);
};

const updateProfile = async (req, res) => {
  const user = req.user;
  const {
    name,
    mobile,
    gender,
    dob,
    state,
    country,
    city,
    occupation,
    address,
  } = req.body;
  user.name = name || user.name;
  user.mobile = mobile || user.mobile;
  if (gender) {
    user.gender = gender;
  }
  user.dob = dob || user.dob;
  user.state = state || user.state;
  user.country = country || user.country;
  user.city = city || user.city;
  user.occupation = occupation || user.occupation;
  user.address = address || user.address;
  await user.save();
  res.json({ message: "user data updated successfully" });
};

const changePassword = async (req, res) => {
  const user = req.user;
  const { newPassword, oldPassword } = req.body;
  if (!newPassword || !oldPassword)
    return res.status(404).json({ error: "old and new password required" });
  const passwordMatched = await bcrypt.compare(oldPassword, `${user.password}`);
  if (!passwordMatched)
    return res.json({ error: "old password is incorrect", code: 802 });
  user.password = newPassword;
  await user.save();
  res.json({ message: "Password update successfully" });
};

module.exports = {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
  changePassword,
};
