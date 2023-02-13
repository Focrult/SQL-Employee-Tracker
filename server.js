//Declarations
const express = require('express');
const inquirer= require('inquirer');
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


const Prompts = () => {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'Start',
        message: 'Select what you want to do:',
        choices: [
            "View all Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Exit"
        ]
        }
    ]).then(choice1 => {
        const verify = choice1.Start;
        switch (verify){
            case "View all Employees":

            break;
            case "Add Employee":

            break;
            case "Update Employee Role":

            break;
            case "View All Roles":

            break;
            case "Add Role":

            break;
            case "View All Departments":

            break;
            case "Add Department":

            break;
            case "Exit":

            break;
            default:
                console.log("Error");
        }
    })


}


Prompts();



app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  