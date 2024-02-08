const fs = require("fs");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textInput);

const textOut = `This is what we know about the avakado ${textInput}\n Created at ${Date.now()}`;
fs.writeFileSync("./txt/out.txt", textOut);
