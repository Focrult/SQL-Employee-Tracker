const mysql = require('mysql2');
require('dotenv').config();
// Create connection to the database, using the DotEnv package
const connection = mysql.createConnection({
  host: 'localhost',
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});
// Verify connection
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the mydb database');
});

module.exports = connection;