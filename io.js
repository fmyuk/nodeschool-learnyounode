const fs = require("fs");
const file = fs.readFileSync(process.argv[2]);
const buf = new Buffer(file);
const strs = buf.toString().split("\n");
console.log(strs.length - 1);
