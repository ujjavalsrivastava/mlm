const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@mlmclusters.7madj9i.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBNAME}`,
    {}
  )
  .then(() => console.log("Connected to DB Succesfully"))
  .catch((error) => console.log("Failed to connect DB", error));

module.exports = mongoose;
