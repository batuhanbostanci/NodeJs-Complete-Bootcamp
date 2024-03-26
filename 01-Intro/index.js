<<<<<<< HEAD
// const fs = require("fs");

// //Blocking Synchronous way
=======
const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////////
//Blocking Synchronous way
>>>>>>> c286e9c1f6ea26bd780bf3ec92eed6341414a4bc

// // const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

// // console.log(textInput);

// // const textOut = `This is what we know about the avakado ${textInput}\n Created at ${Date.now()}`;
// // fs.writeFileSync("./txt/out.txt", textOut);

<<<<<<< HEAD
// //Non-Blocking Asynchronous way
=======
//Non-Blocking Asynchronous way
>>>>>>> c286e9c1f6ea26bd780bf3ec92eed6341414a4bc
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error");
//   console.log(data);
// });

<<<<<<< HEAD
// const http = require("http");
// const url = require("url");
// const server = http.createServer((req, res) => {
//   res.end("Hello from the server");
// });

// server.listen(8000, "localhost", () => {
//   console.log("Server is listening to the port 8000");
// });

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.end("API");
  } else {
    res.write(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });

    res.end("<h1>Page not found </h1>");
  }
=======
//Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    console.log("This is the overview");
  } else if (pathName === "/product") {
    console.log("This is the product");
  } else if (pathName === "/api") {
    console.log("This is the API");

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
>>>>>>> c286e9c1f6ea26bd780bf3ec92eed6341414a4bc
});
