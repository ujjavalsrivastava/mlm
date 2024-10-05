// Function to generate a 6-digit random code
const generateCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit number

module.exports = { generateCode };
