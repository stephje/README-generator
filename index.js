// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//List of common licenses
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
        type: 'list',
        choices: ['Editor', 'Basic Inputs'],
        message:
            'Would you like to use your default editor, or stick to basic command line inputs?',
        name: 'editor',
    },
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
        when: answers => answers.editor === 'Editor',
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Please enter any usage instructions for your project',
        when: answers => answers.editor === 'Editor',
    },
    {
        type: 'editor',
        name: 'credits',
        message: 'Please enter any credits or acknowledgements for your project',
        when: answers => answers.editor === 'Editor',
    },
    {
        type: 'editor',
        name: 'contribution',
        message:
            'Please enter instructions on how to contribute to your project',
        when: answers => answers.editor === 'Editor',
    },
    {
        type: 'editor',
        name: 'tests',
        message:
            'Please enter instructions on how to run the tests for your project',
        when: answers => answers.editor === 'Editor',
    },
    {
        type: 'input',
        name: 'installation',
        message:
            'Please enter any installation instructions required to use your project',
        when: answers => answers.editor === 'Basic Inputs',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage instructions for your project',
        when: answers => answers.editor === 'Basic Inputs',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter any credits or acknowledgements for your project',
        when: answers => answers.editor === 'Basic Inputs',
    },
    {
        type: 'input',
        name: 'contribution',
        message:
            'Please enter instructions on how to contribute to your project',
        when: answers => answers.editor === 'Basic Inputs',
    },
    {
        type: 'input',
        name: 'tests',
        message:
            'Please enter instructions on how to run the tests for your project',
        when: answers => answers.editor === 'Basic Inputs',
    },
];

// Write README file
function writeToFile(fileName, data) {
    //A conditional using a ternary operator. Condition is 'if there is an error', if truthy the error is logged to the console, if falsy then "Success!" is logged to the console
    fs.writeFile(fileName, data, err =>
        err
            ? console.error(err)
            : console.log('README.md file generated successfully')
    );
}

// TODO: Create a function to initialize app
async function main() {


    //prompt user for answers to questions and store answers as variable
    let answers = await inquirer.prompt(questions);


    //Generate the markdown for the README file
    let markdown = generateMarkdown(answers, licenses);

    //Write the generated markdown to a file
    writeToFile('Generated_README.md', markdown);
}

main();
