const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  transports: [
    new transports.MongoDB({
      level: "error",
      db: `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@mlmclusters.7madj9i.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=${process.env.DBNAME}`,
      collection: "logger",
      options: {},
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
