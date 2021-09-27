const express = require("express");
const cors = require("cors");

var app = express();

require("dotenv").config();

app.use(cors());

app.use('/', require('./api/disciplina'));

app.listen(8080, console.log("listening"));


//app.listen(process.env.PORT || 5000, console.log("server on"));
