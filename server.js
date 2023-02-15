//Declarations
const express = require('express');
const inquirer= require('inquirer');
const mysql = require('mysql2');
const connection = require('./db');
const Table = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//When response is not found
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
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


//handling queries
connection.query("SELECT * FROM department", function(err, results) {
    console.log("Passing connection.query")
    console.log(results);
});


//Prompts();



//Functions Below
const ViewEmployees = () => {
    console.log("View Employee");

}
const AddEmployees = () => {
    console.log("Add Employee");
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter employee's first name: ",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter employee's last name: ",
        },
        {
            type: "input",
            name: "role",
            message: "Enter employee's role: ",
        }
    ]).then(employee => {
        employee
    })
}
const UpdateEmployees = () => {
    console.log("Update Employee");
}
const ViewRoles = () => {
    console.log("View Role");
    connection.query();
}
const AddRole = () => {
    console.log("Add a role")
}
const ViewDepartments = () => {
    console.log("All Departments\n")
    const viewAll = `SELECT * FROM department`;
    connection.query(viewAll, (err, rows) => {
     if(err){
        console.log(err)
     } else{
        console.table(rows);
        return Prompts();
     }
    });
}
const AddDepartments = () => {
    console.log("Add a department");
}
const Exit = () => {
    console.log("Exit");






}