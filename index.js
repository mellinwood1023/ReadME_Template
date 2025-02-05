// TODO: Include packages needed for this application
import inquirer  from "inquirer";
import fs from "fs";

const prompt = inquirer.createPromptModule();
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide short description explaining your motivation for your project, as well as the intended use. Include anything you may have learned!',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Steps required to install your project:',
            name: 'installations',
        },
        {
            type: 'input',
            message: 'Provide instruction and examples for use:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter contributions',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'List licensing: ',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Display testing for your application:',
            name: 'tests',
        },

    ])
    .then((data) => {
        const fileName = `${data.title.toLowerCase().split('').join('')}.json`;
        const template = `
# <${data.title}>

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installations}

## Usage

${data.usage}

## Credits

${data.contributions}

## License

${data.license}
---

## How to Contribute

${data.contributions}

## Tests

${data.tests}
        `

        fs.writeFile('samplereadme.md', template, (err) => 
            err ? console.error(err) : console.log('ReadMe Updated!')
        );
    });
  

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
