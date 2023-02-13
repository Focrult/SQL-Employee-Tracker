const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    password: 'nope',
    user: 'root',
    database: 'mydb'
},
() => console.log("Connected to the mydb database")
);

module.exports = connection;