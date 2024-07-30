const express = require("express");
const cors = require("cors");
const v1Router = require("./routes/v1Routes");
const dotenv = require("dotenv").config();

const app = express();
app.use(
	cors({
		origin: ["http://localhost:6006", "http://192.168.1.69:6006"],

		credentials: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/v1`, v1Router);

app.use("/", (req, res) => {
	res.status(200).json({ status: "success", message: "Server Running" });
});


app.use((error, req, res, next) => {
	console.log(error);
	res.status(500).json({ error: error.message });
});

module.exports = app;
