// TODO: Include packages needed for this application
const fs = require('fs')

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'what is the title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'what is the description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'what is the installation?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'what is the usage?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'what is the credit?',
            name: 'credit',
        },
        {
            type: 'input',
            message: 'what is the licnese?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'what is the features?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'what is the contribution?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'what is the tests?',
            name: 'tests',
        }
    ])
    
    .then(function (response) {
        console.log(response)
        const markdown = generateMarkdown(response)
        console.log(markdown)
        fs.writeFileSync('./dist/readme.md',markdown)

    })

