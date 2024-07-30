const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: { type: String, required: true, default: "Anonymous" },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user" },
    password: {
      type: String,
      require: true,
      minLength: 6,
      validate(value) {
        if (value.toLowerCase().includes("password"))
          throw new Error("Password can not contain password");
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!this.isModified("password")) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 8);
  next();
});

// statics are accessible to Modal
userSchema.statics.findByCredential = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) throw new Error("Invalid password");
  return user;
};

// methods are accessible to Instance
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const tokenSecret = process.env.TOKEN_SECRET;
  const token = await jwt.sign({ _id: user._id.toString() }, tokenSecret, {
    expiresIn: "7 days",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

const User = model("User", userSchema);

module.exports = User;
