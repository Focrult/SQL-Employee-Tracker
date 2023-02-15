//Declarations
const express = require('express');
const inquirer= require('inquirer');
const mysql = require('mysql2');
const connection = require('./db');
const Table = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// When response is not found
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
                ViewEmployees();
              break;
          case "Add Employee":
                AddEmployees();
              break;
          case "Update Employee Role":
                UpdateEmployees()
              break;
          case "View All Roles":
                ViewRoles();
              break;
          case "Add Role":
                AddRole();
              break;
          case "View All Departments":
                ViewDepartments();
              break;
          case "Add Department":
                AddDepartments();
              break;
          case "Exit":
                Exit();
              break;
          default:
              console.log("Error");
        }
    });
};


// Handling queries
connection.query("SELECT * FROM department", function(err, results) {
    console.log("Passing connection.query")
    console.log(results);
});


Prompts();



// Functions Below
const ViewEmployees = () => {
    console.log("View Employee");
    const viewAll = `
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `;
    connection.query(viewAll, (err, rows) => {
      if (err) {
        console.log("Error");
        console.log(err);
      } else {
        console.table(rows);
      }
      Prompts();
    });
  };
const AddEmployees = () => {
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
        name: "roleid",
        message: "Enter employee's role: ",
      },
      {
        type: "input",
        name: "managerid",
        message: "Enter manager id for employee: ",
      }
    ]).then(employee => {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [employee.firstName, employee.lastName, employee.roleid, employee.managerid],
        (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`${employee.firstName} ${employee.lastName} |ID:${employee.roleid}| who is assigned to ID:${employee.managerid}, has been added to the database.`);
          Prompts();
        }
      );
    });
  };
  const UpdateEmployees = () => {
    console.log("Update Employee");
    inquirer.prompt([
        {
        type: "input",
        name: "employeeId",
        message: "Enter Employee ID: ",
        },
        {
        type: "input",
        name: "newRole",
        message: "Enter Employee new role ID: ",
        },
    ]).then(({ employeeId, newRole }) => {
        const sql = "UPDATE employee SET role_id = ? WHERE id = ?";
        const params = [newRole, employeeId];
        connection.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Employee |ID: ${employeeId}| role updated to ID:${newRole}.`);
            Prompts();
        });
    });
}
const ViewRoles = () => {
    console.log("View Role");
    const viewAll = `SELECT * FROM role`;
    connection.query(viewAll, (err, rows) => {
     if(err){
        console.log(err)
     } else{
        console.table(rows);
        return Prompts();
     }
    });
}
const AddRole = () => {
    console.log("Add a role")
    inquirer.prompt([
        {
        type: "input",
        name: "title",
        message: "Enter your roles title: ",
        },
        {
        type: "input",
        name: "salary",
        message: "Enter the roles salary: ",
        },
        {
        type: "input",
        name: "department",
        message: "Enter the roles department id: ",
        }
      ]).then(role => {
        connection.query(
          "INSERT INTO role (title, salary, department) VALUES (?, ?, ?)",
          [role.title, role.salary, role.department],
          (err, result) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`The following: ${role.title}, ${role.salary} and, ${role.department} have been added to the database.`);
            Prompts();
          }
        );
      });
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
    inquirer.prompt([
        {
        type: "input",
        name: "title",
        message: "Enter your new department name: ",
        },
      ]).then(department => {
        connection.query(
          "INSERT INTO department (name) VALUES (?)",
          [department.title],
          (err, result) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`The following: ${department.title} has been added to the database.`);
            Prompts();
          }
        );
      });
}
const Exit = () => {
    console.log("Exit");
    return;
}