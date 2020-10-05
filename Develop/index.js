const inquirer = require("inquirer")
const fs = require('fs')
// const util = require("utils")

const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
    type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in a few sentences.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation instructions for your application.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter installation instructions for your application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how a user will use your application.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter usage instructions for your application!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Does your project repository already have a license assigned?',
    }, {
        when: function (response) {
            if (response.licenseConfirm === false) {return true;}
            else {return false}
        },
        type: 'list',
        name: 'license',
        message: 'What license are you using with your project?',
        choices: ['MIT', 'Apache 2.0','GNU GPLv3', 'other']        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how another developer can contribute to the project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please describe contribution to your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for application.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: 'Provide your GitHub repository to your project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your GitHub repository name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email for users to contact you.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your contact email!');
                return false;
            }
        }
    }



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('README.md file has been created!')
        }
    })
};
// function to initialize program
function init() {
    return inquirer
    .prompt(questions)
    .then(readmeData => {
        return writeToFile('README.md',readmeData)
})
// catches failed / rejected promises
.catch(err => {
    console.log(err);
})

};
// function call to initialize program
init();
