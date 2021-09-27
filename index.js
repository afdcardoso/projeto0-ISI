const express = require("express");
const cors = require("cors");

var app = express();
app.use(cors());

app.use('/', require('./api/disciplina'));

app.listen(8080, console.log("listening"));