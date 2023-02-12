const mysql = require('mysql2');

//create connection
const connection = mysql.createConnection({
    host: 'localhost',
    password: 'Not showing my password :P',
    user: 'root',
    database: 'mydb'
})

connection.connect();





module.exports = {}