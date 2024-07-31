const crypto = require("crypto");

// Function to generate a unique referral code
function generateReferralCode(len = 8) {
  const randomString = crypto.randomBytes(4).toString("hex"); // 8 characters long
  const hash = crypto.createHash("sha256");
  hash.update(randomString);
  const referralCode = hash.digest("hex").substring(0, len); // 8 characters long
  return referralCode;
}

module.exports = { generateReferralCode };
