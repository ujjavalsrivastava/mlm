const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: { type: String, required: true, default: "user" },
    email: { type: String, required: true, unique: true },
    referalCode: {
      type: String,
      required: true,
      unique: true,
    },
    lowerLevel: [{ type: Types.ObjectId, ref: "User", required: false }],
    upperLevel: { type: Types.ObjectId, ref: "User", required: false },
    role: {
      type: String,
      default: "user",
    },
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

const User = model("User", userSchema);

module.exports = User;
