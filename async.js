const fs = require("fs");
const file = process.argv[2];
fs.readFile(file, function (error, data) {
  const str = data.toString().split("\n");
  console.log(str.length - 1);
});
