var mysql = require('mysql');

require('dotenv').config();

var options = {
    host     : process.env.DB_HOST      || "localhost",
    port     : process.env.DB_PORT      || '',
    user     : process.env.DB_USER      || 'root',
    password : process.env.DB_PASSWORD  || '',
    database : process.env.DB_NAME      || "projeto0"
};

var database = mysql.createConnection(options);

module.exports = database;