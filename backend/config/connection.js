const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
   // `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@mlmclusters.7madj9i.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBNAME}`
   `mongodb+srv://digitalduniya2407:o99puertAeGh3Zk6@cluster0.d2mub.mongodb.net/digitduniyadb?retryWrites=true&w=majority&appName=digitduniyadb`  
  );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
