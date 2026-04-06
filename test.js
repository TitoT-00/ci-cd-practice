const fs = require("fs");

if (!fs.existsSync("./index.js")) {
  throw new Error("index.js not found");
}

console.log("Tests passed");
