const crypto = require("crypto");

// Function to generate a unique referral code
function generateReferralCode(len = 8) {
  const randomString = crypto.randomBytes(4).toString("hex"); // 8 characters long
  const hash = crypto.createHash("sha256");
  hash.update(randomString);
  const referralCode = hash.digest("hex").substring(0, len); // 8 characters long
  return referralCode;
}

const allLowerLevelUsersPipeLine = (_id) => [
  {
    $match: {
      _id,
    },
  },
  {
    $graphLookup: {
      from: "users",
      startWith: "$lowerLevel",
      connectFromField: "lowerLevel",
      connectToField: "_id",
      as: "allLowerLevels",
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      email: 1,
      referalCode: 1,
      allLowerLevels: 1,
      createdAt: 1,
      updatedAt: 1,
      allLowerLevels: {
        _id: 1,
        name: 1,
        email: 1,
        referalCode: 1,
        createdAt: 1,
        updatedAt: 1,
        parentId: 1,
      },
    },
  },
];

module.exports = { generateReferralCode, allLowerLevelUsersPipeLine };
