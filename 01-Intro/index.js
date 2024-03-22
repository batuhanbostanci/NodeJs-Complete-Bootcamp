// const fs = require("fs");

// //Blocking Synchronous way

// // const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

// // console.log(textInput);

// // const textOut = `This is what we know about the avakado ${textInput}\n Created at ${Date.now()}`;
// // fs.writeFileSync("./txt/out.txt", textOut);

// //Non-Blocking Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error");
//   console.log(data);
// });

const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(8000, "localhost", () => {
  console.log("Server is listening to the port 8000");
});
