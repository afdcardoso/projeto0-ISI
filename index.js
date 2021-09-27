const express = require("express");
const cors = require("cors");

var app = express();

require("dotenv").config();

app.listen(process.env.PORT || 5000, console.log("server on"));