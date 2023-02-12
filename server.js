//Declarations
const express = require('express');
const mysql = require('mysql2');
const dbModule = require('./db.js');

const PORT = process.env.PORT || 3001;
const app = express();
//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());



const db = mysql.createConnection({
    host: 'localhost',
    password: 'Not showing my password :P',
    user: 'root',
    database: 'mydb'
},
console.log("Connected to the mydb database")
);









app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  