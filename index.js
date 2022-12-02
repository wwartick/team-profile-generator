const createHTML = require('./src/createHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const workArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of the manager for this project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID of the manager for this project',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please input an ID');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email of the manager for this project',
            validate: email => {
                validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (validEmailRegex) {
                    return true;
                } else {
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office number for the manager for this project',
            validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log('Please input an office number');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        workArray.push(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose a role for this employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Name of this employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'ID of this employee for this project',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please input an ID');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email of the employee for this project',
            validate: email => {
                validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (validEmailRegex) {
                    return true;
                } else {
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Github of this employee?',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please input a github');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'School of this employee?',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please input a school');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: 'Are there any other employees for this project?',
            default: 'false'
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, addMoreEmployees} = employeeData;
        let employee;

        if (role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
        }

        workArray.push(employee);

        if (addMoreEmployees) {
            return addEmployee(workArray);
        } else {
            return workArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data,err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log( "Team has been created. See the results in the index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(workArray => {
        return createHTML(workArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
