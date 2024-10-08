const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: { type: String, required: true, default: "user" },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, default: null },
    resetPasswordCode: { type: Number, default: null },
    resetPasswordExpires: { type: Date, default: null },
    gender: {
      type: String,
      default: null,
    },
    dob: { type: String, default: null },
    state: { type: String, default: null },
    country: { type: String, default: null },
    pincode: { type: Number, default: null },
    city: { type: String, default: null },
    occupation: { type: String, default: null },
    address: { type: String, default: null },
    referalCode: {
      type: String,
      required: true,
      unique: true,
    },
    lowerLevel: [{ type: Types.ObjectId, ref: "User", required: false }],
    parentId: {
      type: Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
    role: {
      type: String,
      default: "user",
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.updatedAt = Date.now();
  if (!this.isModified("password")) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 8);
  next();
});

const User = model("User", userSchema);

module.exports = User;
