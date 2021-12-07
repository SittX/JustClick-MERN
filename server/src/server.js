const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
const router = require("../routes/routes_controller");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
//body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Add router middleware
app.use("/", router);

//Connection to the MongoDb
mongoose.connect(process.env.CONNECTION_STRING);

mongoose.connection
  .once("connected", () => console.log("Connected to the Db"))
  .on("error", (err) => console.error(err));
app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
