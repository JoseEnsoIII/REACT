const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', // If you have a password, enter it here
    database: 'reactflix', // Specify the database name here
});

module.exports = db;