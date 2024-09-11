const http = require("http");

const sever = http.createServer((req, res) => {
  console.log("run request...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h3> Hello world! <h3>");
  res.write("<h2> from Eric Van Luong </h2> ");
  res.end();
});

sever.listen(3000, "localhost", () => {
  console.log("Node.js server is running on port:3000");
});
