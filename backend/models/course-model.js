const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  price: {
    type: Number,
  },
  courseId: {
    type: String,
    required: true,
  },
});

const Course = model("course", courseSchema);
module.exports = Course;
