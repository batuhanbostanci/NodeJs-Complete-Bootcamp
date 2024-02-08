const fs = require("fs");

//Blocking Synchronous way

// const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textInput);

// const textOut = `This is what we know about the avakado ${textInput}\n Created at ${Date.now()}`;
// fs.writeFileSync("./txt/out.txt", textOut);

//Non-Blocking Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error");
  console.log(data);
});
