//function that returns a license badge based on which license is passed in
// If there is no license, return empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if(license === 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else{
    return ``
  }
}

//function that returns the license link
// If there is no license, return empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`
  }
  else if(license === 'Boost'){
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
  else if(license === 'Mozilla'){
    return `https://opensource.org/licenses/MPL-2.0`
  }
  else{
    return ``
  }
}

//function that returns the license section of README
// If there is no license, return empty string
function renderLicenseSection(license) {
  console.log(license ? `## License
This project is licensed under the ${renderLicenseBadge(license)} ${renderLicenseLink(license)} license.` : '')
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}

## License
This application is licensed by ${data.license}.  
License URL: ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me at ${data.email}. You can find more of my work at ${data.github}.`;
}

module.exports = generateMarkdown;
