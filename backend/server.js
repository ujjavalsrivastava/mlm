require("dotenv").config({ path: ".env" });
require("./config/connection");

const app = require("./app");
const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is running in development on http://localhost:${PORT}`);
});
