const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const levelPercent = require("./routes/level-percentage");
const kycRoute = require("./routes/kyc-route");
const { userRoutes, productRoutes, videoRoutes } = require("./routes");
const connectDB = require("./config/connection");
const path = require("path");
const morgan = require("morgan");
(async () => {
  require("./config/connection");
  const PORT = process.env.APP_PORT;
  const chalk = (await import("chalk")).default;
  const app = express();
  app.use(
    cors({
      origin: ["http://localhost:5173", "http://35.154.235.131:80"],

      credentials: true,
    })
  );
  app.use(express.json());
  // Define custom tokens for method, url, and status
  morgan.token("status", (req, res) => {
    const status = res.statusCode;
    if (status >= 500) return chalk.red(status);
    if (status >= 400) return chalk.yellow(status);
    if (status >= 300) return chalk.cyan(status);
    if (status >= 200) return chalk.green(status);
    return status;
  });

  morgan.token("method", (req) => chalk.blue(req.method));
  morgan.token("url", (req) => chalk.magenta(req.url));

  const customFormat =
    ":method :url :status :response-time ms - :res[content-length]";

  app.use(morgan(customFormat));

  app.use("/uploads", express.static("uploads"));

  app.use(
    `/api`,
    userRoutes,
    productRoutes,
    levelPercent,
    kycRoute,
    videoRoutes
  );

  app.use((err, req, res, next) => {
    console.error("app.js", err.stack);
    res.status(500).send({ error: err.message });
  });

  // app.use("/", (req, res) => {
  //   res.status(200).json({ status: "success", message: "Route not defined" });
  // });

  app.use(express.static(path.join(__dirname, "./dist")));

  // Catch all handler for React routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "./dist/index.html"));
  });

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `⚙️  Server is running in development on http://localhost:${PORT}`
        );
      });
    })
    .catch((err) => {
      console.log("MONGO db connection failed !!! ", err);
    });
})();
