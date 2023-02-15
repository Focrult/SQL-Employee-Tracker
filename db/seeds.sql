INSERT INTO department (name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

SELECT * FROM department;

INSERT INTO role (title, salary, department)
VALUES
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

SELECT * FROM role;

INSERT INTO manager (first_name, last_name, manager_id)
VALUES
("Cosmo", "Kramer", 1),
("New", "Man", 2),
("George", "Costanza", 3),
("Elaine", "Benes", 4),
("Jerry", "Seinfeld", 5);

SELECT * FROM manager;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("David", "Brent", 8, 1),
("Tim", "Canterbury", 3, 2),
("Gareth", "Keenan", 2, 5),
("Dwight", "Schrute", 7, 4),
("Pam", "Beesly", 1, 5),
("Jim", "Halpert", 0, 3),
("Michael", "Scott", 5, 1),
("John", "Smith", 6, 2);

SELECT * FROM employee;