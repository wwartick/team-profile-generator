const createHTML = require('./src/createHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const workArray = [];

const addManager = () => {
    return inquirer.createPromptModule([
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
            validate: emailInput => {
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
        },
    ])
}
