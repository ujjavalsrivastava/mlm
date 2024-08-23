const { Schema, model, Types } = require("mongoose");

const vimeoSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    courses: [],
  },
  { timestamps: true }
);

const Vimeo = model("Vimeo", vimeoSchema);

module.exports = Vimeo;
