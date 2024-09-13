const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Cao Van Luong");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require("http");
// const sever = http.createServer((req, res) => {
//   console.log("run request...");
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h3> Hello world! <h3>");
//   res.write("<h2> tu cao Van Luong </h2> ");
//   res.end();
// });

// sever.listen(3000, "localhost", () => {
//   console.log("Node.js server is running on port:3000");
// });
