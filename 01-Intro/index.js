const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////////
//Blocking Synchronous way

// const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textInput);

// const textOut = `This is what we know about the avakado ${textInput}\n Created at ${Date.now()}`;
// fs.writeFileSync("./txt/out.txt", textOut);

//Non-Blocking Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error");
//   console.log(data);
// });

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
});
