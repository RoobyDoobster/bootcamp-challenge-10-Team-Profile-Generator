const inquirer = require('inquirer');
const fs= require('fs');
const jest = require('jest');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML');
const generateCards = require('./utils/generateCards');

let teamMembers = [];

const questions = [
    {
        type: 'input',
        message: (prompt) => `Enter the ${prompt.role}'s name`,
        name: 'name'
    },
    {
        type: 'input',
        message: (prompt) => `Enter the ${prompt.role}'s employee ID`,
        name: 'id'
    },
    {
        type: 'input',
        message: (prompt) => `Enter the ${prompt.role}'s email address`,
        name: 'email'
    },
]

function createEmployee() {
    inquirer
    .prompt([
        ...questions,
        {
            type: 'list',
            message: 'What role does this employee have?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: (prompt) => `Enter the ${prompt.role}'s github username`,
            when: (prompt) => prompt.role === 'Engineer',
            name: 'github'
        },
        {
            type: 'input',
            message: (prompt) => `Enter the ${prompt.role}'s school`,
            when: (prompt) => prompt.role === 'Intern',
            name: 'school'
        },
        {
            type: 'input',
            message: (prompt) => `Enter the ${prompt.role}'s office number`,
            when: (prompt) => prompt.role === 'Manager',
            name: 'officeNum'
        },
        {
            type: 'confirm',
            message: 'Would you like to add another Employee?',
            name: 'newEmployee'
        },
    ])
    .then((value) => {
        value.role == 'Engineer' ? teamMembers.push(new Engineer(value.name, value.id, value.email, value.github))
        : value.role == 'Intern' ? teamMembers.push(new Intern(value.name, value.id, value.email, value.school))
        : value.role == 'Manager' ? teamMembers.push(new Manager(value.name, value.id, value.email, value.officeNum))
        : console.log("Error", value.role);

        value.newEmployee ? createEmployee() : createHTML();
    })
}

function createHTML() {
    let teamCards = ` `;
    for (teamMember of teamMembers) {
        teamCards += generateCards(teamMember);
    }

    writeHtmlFile(generateHTML(teamCards));
}

function writeHtmlFile(htmlData) {
    fs.writeFile("index.html", htmlData, (error) =>
    error ? console.log("error occured while writing file") : console.log("successfully written file")
    );
}

function init() {
    inquirer
    .prompt([
        ...questions,
        {
            type: 'input',
            message: `Enter the Team Manger's office number`,
            name: 'office'
        },
        {
            type: 'confirm',
            message: `Would you like to add another employee?`,
            name: 'newEmployee'
        },
    ])
    .then((value) => {
        teamMembers.push(new Manager(...Object.values(value)));
        value.newEmployee ? createEmployee() : createHTML();
    })
}

init();