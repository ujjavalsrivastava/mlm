const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const app = require("./app");
const sequelize = require("./config/sequelize");

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running in development on http://localhost:${PORT}`);
});
