const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
const router = require("../routes/routes_controller");
require("dotenv").config();
app.use(cors());
//body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Add router middleware
app.use("/", router);
app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
