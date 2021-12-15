const express = require("express");
const mongoose = require("mongoose");

const evalConroller = require("./routers/eval.router");
const highest = require("./routers/highest.router");

const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://remonsingh:remon123@cluster0.ylca6.mongodb.net/Express-MVC"
  );
};

app.use(express.json());

app.use("/api", evalConroller);
app.use("/api/student/highest", highest);

const start = async () => {
  await connect();
  app.listen(8080, () => {
    console.log("Server Started");
  });
};

start();