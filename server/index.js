// configuration of enviroment variables
require("dotenv").config();
const express = require("express");

// creating app server
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// listenning for requests
app.listen(process.env.PORT, () => {
  console.log("server is running on port 5000");
});
