const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  generateReferralCode,
  populateLowerLevel,
  joinedToday,
  getUserId,
  rewardsHandler,
} = require("../utils/helper");
const UserPurchase = require("../models/purchase-history-model");
const PercentDistribution = require("../models/percentage-distribution-model");
const path = require("path");
const fs = require("fs");
const bankDetails = require("../models/bank-details-model");
const Rewards = require("../models/rewards-modal");
const nodemailer = require("nodemailer");
const { generateCode } = require("../utils/gen");
const { getMinutesDifference } = require("../utils/dateTime");

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
    await bankDetails({ email, user: savedUser._id }).save();
    await rewardsHandler(referedUser);
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
  if (newPassword.trim().length > 5)
    return res
      .status(404)
      .json({ error: "Password should be greater than 5 character" });
  const passwordMatched = await bcrypt.compare(oldPassword, `${user.password}`);
  if (!passwordMatched)
    return res.json({ error: "old password is incorrect", code: 802 });
  user.password = newPassword;
  await user.save();
  res.json({ message: "Password update successfully" });
};

// Sample data structure
const user = {
  name: "User1",
  lowerLevelUsers: [
    {
      name: "User2",
      lowerLevelUsers: [
        {
          name: "User3",
          lowerLevelUsers: [],
        },
        {
          name: "User4",
          lowerLevelUsers: [],
        },
      ],
    },
    {
      name: "User5",
      lowerLevelUsers: [
        {
          name: "User6",
          lowerLevelUsers: [],
        },
      ],
    },
  ],
};

function countUsersAtEachLevel(
  user,
  level = 0,
  counts = { totalByLevel: {}, createdTodayByLevel: {} }
) {
  if (!counts.totalByLevel[level]) {
    counts.totalByLevel[level] = 0;
    counts.createdTodayByLevel[level] = 0;
  }
  if (!user.email) {
    return counts;
  }

  counts.totalByLevel[level]++;

  if (joinedToday(user)) {
    counts.createdTodayByLevel[level]++;
  }

  user?.lowerLevel?.forEach((lowerUser) => {
    countUsersAtEachLevel(lowerUser, level + 1, counts);
  });

  return counts;
}

const getUserLevelStatus = async (req, res) => {
  const user = req.user;
  const allLowerLevelUsers = await populateLowerLevel(user, 0, 8);
  const data = countUsersAtEachLevel(allLowerLevelUsers, 1);
  res.json({ ...data });
};

const updateProfilePicture = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const userId = getUserId(req);
  const oldFilePath = path.join(
    __dirname,
    "uploads/profile_pictures",
    `${userId}.jpg`
  );
  if (userId && fs.existsSync(oldFilePath)) {
    fs.unlinkSync(oldFilePath); // Delete the old profile picture
  }
  res.json({ message: "profile picture updated successfully", ...req.file });
};

const getProfilePicture = async (req, res) => {
  const userId = `${getUserId(req)}`;
  const imagePath = path.join(
    __dirname,
    "../uploads/profile_pictures",
    `${userId}.PNG`
  );
  if (fs.existsSync(imagePath)) return res.sendFile(imagePath);
  res.status(404).json({ error: "Profile picture not found" });
};

const getInvoice = async (req, res) => {
  const userId = getUserId(req);
  const userPurchaseHistory = await UserPurchase.findOne({ userId });
  res.json(userPurchaseHistory);
};

const checkUserExist = async (req, res) => {
  const { email } = req.query;
  const user = await User.findOne({ email });
  res.json({ inValid: !!user });
};

const getRewards = async (req, res) => {
  const isAdmin = req.user.role === "admin";
  if (isAdmin) {
    const rewards = await Rewards.find().populate("user");
    return res.json({ rewards });
  }
  const userId = getUserId(req);
  const rewards = await Rewards.find({ user: userId }).populate("user");
  res.json({ rewards });
};

const handleForgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Generate a 6-digit code
    const resetCode = generateCode();

    // Store the code and expiry time (e.g., 10 minutes from now)
    user.resetPasswordCode = resetCode;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // expire in 10 minutes
    await user.save();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Send the 6-digit code via email
    await transporter.sendMail({
      to: user.email,
      from: process.env.MAIL_USERNAME,
      subject: "Your Password Reset Code",
      html: `<p>You requested a password reset</p>
            <p>Your 6-digit code is: <b>${resetCode}</b></p>
            <p>This code will expire in 10 minutes.</p>`,
    });
    res.status(200).send({ message: "Password reset code sent to your email" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

const verifyResetCode = async (req, res) => {
  const { email, resetCode, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const now = new Date();

    const differenceInMin = getMinutesDifference(
      user.resetPasswordExpires,
      `${now}`
    );

    // Check if the code is valid and not expired
    console.log(user);
    if (`${user.resetPasswordCode}` !== `${resetCode}` || differenceInMin < 0) {
      return res.status(400).send({ message: "Invalid or expired reset code" });
    }

    user.password = newPassword;
    user.resetPasswordCode = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).send({ message: "Password has been reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  createUser,
  loginHandler,
  getUserProfile,
  updateProfile,
  changePassword,
  getUserLevelStatus,
  updateProfilePicture,
  getProfilePicture,
  getInvoice,
  checkUserExist,
  getRewards,
  handleForgotPassword,
  verifyResetCode,
};
