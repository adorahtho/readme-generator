//packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

//array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a short description for your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How is this project used?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'Boost', 'Mozilla', 'none']
  },
  {
    type: 'input',
    message: 'Please provide guidelines for contributing to the repo.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What command should be run for tests?',
    name: 'tests',
  },
];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err)=> {
    err ? console.log(err) : console.log('You created a README!')
  })
}

//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    writeToFile('README-sample.md', data)
  })
}

// Function call to initialize app
init();
