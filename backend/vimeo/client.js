const Vimeo = require("@vimeo/vimeo").Vimeo;

// Replace these with your actual credentials
const CLIENT_ID = process.env.VIMEO_CLIENT_ID;
const CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET;

// Initialize the Vimeo client
const vimeoClient = (accessToken) =>
  accessToken
    ? new Vimeo(CLIENT_ID, CLIENT_SECRET, accessToken)
    : new Vimeo(CLIENT_ID, CLIENT_SECRET);

module.exports = vimeoClient;
