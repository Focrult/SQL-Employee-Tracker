//Declarations
const express = require('express');
const inquirer= require('inquirer');
const mysql = require('mysql2');
const connection = require('./db');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
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
              // Logic for handling "View all Employees" goes here
                ViewEmployees();
              break;
          case "Add Employee":
              // Logic for handling "Add Employee" goes here
                AddEmployees();
              break;
          case "Update Employee Role":
              // Logic for handling "Update Employee Role" goes here
                UpdateEmployees()
              break;
          case "View All Roles":
              // Logic for handling "View All Roles" goes here
                ViewRoles();
              break;
          case "Add Role":
              // Logic for handling "Add Role" goes here
                AddRole();
              break;
          case "View All Departments":
              // Logic for handling "View All Departments" goes here
                ViewDepartments();
              break;
          case "Add Department":
              // Logic for handling "Add Department" goes here
                AddDepartments();
              break;
          case "Exit":
              // Logic for handling "Exit" goes here
                Exit();
              break;
          default:
              console.log("Error");
      }
  });
};

Prompts();


//Functions Below
const ViewEmployees = () => {
    console.log("View Employee");
}
const AddEmployees = () => {
    console.log("Add Employee");
}
const UpdateEmployees = () => {
    console.log("Update Employee");
}
const ViewRoles = () => {
    console.log("View Role");
}
const AddRole = () => {
    console.log("Add a role")
}
const ViewDepartments = () => {
    console.log("view all departments")
}
const AddDepartments = () => {
    console.log("Add a department");
}
const Exit = () => {
    console.log("Exit");
}