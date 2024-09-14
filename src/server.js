// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
// const path = require("path");
import initWebRoute from "./route/web";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
// console.log(">>> check port: ", port);

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

// app.get("/", (req, res) => {
//   res.render("test/index.ejs");
// res.sendFile(path.join(__dirname, "./index.html"));
// });

// app.get("/about", (req, res) => {
//   res.send("cao van luong");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
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
