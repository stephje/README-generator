// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenses = [
    'MIT',
    'GNU GPLv3',
    'GNU AGPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Apache License 2.0',
    'Boost Software License 1.0',
    'The Unlicense',
  ];

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project.',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
  },
  {
    type: 'list',
    loop: false,
    name: 'license',
    message: 'Please select a license from the list',
    choices: licenses,
  },
  {
    type: 'editor',
    name: 'installation',
    message:
      'Please enter any installation instructions required to use your project',
  },
  {
    type: 'editor',
    name: 'contribution',
    message: 'Please enter instructions on how to contribute to your project',
  },
  {
    type: 'editor',
    name: 'tests',
    message:
      'Please enter instructions on how to run the tests for your project',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Please enter any usage instructions for your project',
  },
];

// Write README file
function writeToFile(fileName, data) {
  //A conditional using a ternary operator. Condition is 'if there is an error', if truthy the error is logged to the console, if falsy then "Success!" is logged to the console
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log('README.md file generated successfully')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let markdown = generateMarkdown(answers, licenses);
      writeToFile('README_gen.md', markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
        //Error message for when there is no tty. This is included in the inquirer documentation as an explicit error case
        console.log('Prompt could not be rendered');
      } else {
        //Any other error
        console.log('An unknown error occurred:', error);
      }
    });
}

// Function call to initialize app
init();
