const morgan = require("morgan");
const chalk = require("chalk");

morgan.token("status", (req, res) => {
  const status = res.statusCode;
  // Color coding status
  if (status >= 500) return chalk.red(status);
  if (status >= 400) return chalk.yellow(status);
  if (status >= 300) return chalk.cyan(status);
  if (status >= 200) return chalk.green(status);
  return status;
});

morgan.token("method", (req) => {
  return chalk.blue(req.method);
});

morgan.token("url", (req) => {
  return chalk.magenta(req.url);
});

// Custom Morgan format
const customFormat =
  ":method :url :status :response-time ms - :res[content-length]";

module.exports = morgan(customFormat);
