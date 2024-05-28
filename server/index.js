// configuration of enviroment variables
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const excersizeRouter = require("./routers/excersizeRouter");

// creating app server
const app = express();

// convert response and request into json
app.use(express.json());
// use routers
app.use("/api/excersizes", excersizeRouter);

// connecting to database
mongoose
  .connect(process.env.DB_LINK)
  .then(() => {
    // listenning for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to database & server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
