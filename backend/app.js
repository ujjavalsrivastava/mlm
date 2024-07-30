const express = require("express");
const cors = require("cors");
const routers = require("./routes");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:6006", "http://192.168.1.69:6006"],

    credentials: true,
  })
);
app.use(express.json());

app.use(`/api/`, routers);

app.use("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Server Running" });
});

module.exports = app;
