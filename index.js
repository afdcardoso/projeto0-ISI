const express = require('express');
const cors = require('cors');

/**
 * 
 * ROUTERS DEFINITION
 * 
 */
const disciplina = require('./api/disciplina');
const data = require('./api/data');
const teste = require('./api/teste');




var app = express();


/**
 * 
 * CONFIGURATION
 * 
 */
require("./lib/config/database");

require('dotenv').config();

/**
 * 
 * PARSER MODULES
 * 
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());


/**
 * 
 * ROUTERS
 * 
 */
app.use('/disciplina', disciplina);
app.use('/data', data);
app.use('/teste', teste);

app.listen(8080, console.log("listening"));


//app.listen(process.env.PORT || 5000, console.log("server on"));
