const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user-route");
const levelPercent = require("./routes/level-percentage");
const productRoute = require("./routes/product-route");
const kycRoute = require("./routes/kyc-route");
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:6006",
      "http://192.168.1.69:6006",
      "http://localhost:5173",
    ],

    credentials: true,
  })
);
app.use(express.json());

app.use(`/api`, userRoutes, levelPercent, productRoute, kycRoute);

// Global error handler middleware (for demonstration)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.use("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Server Running" });
});

module.exports = app;
