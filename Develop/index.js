// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
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
    type: 'input',
    message: 'What kind of license should your project have?',
    name: 'license',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeTemplate = `#${questions.title}

  ## Description
  ${questions.description}

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  To install the necessary dependencies, run the following command:
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## License
  This project is licensd under the ${questions.license} license.

  ## Contributing
  ${questions.contributing}

  ## Tests
  To run tests, run the following command:
  ${questions.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact me at ${questions.email}. You can find more of my work at ${questions.github}.`
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers)
  })
}

// Function call to initialize app
init();
