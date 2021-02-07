// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app

function init() {

// TODO: Create an array of questions for user input

  inquirer.prompt([      
        {
        type: 'input',
        name: 'title',
        message: 'Choose a self explaining name for you project:',     
        
        },
        {
        type: 'input',
        name: 'name',
        message: 'Please enter your name:'
        },
        {
        type: 'input',
        name:  'Username',
        message: 'Enter your GitHub username: '
      },
      {
        type: "input",
        name: 'description',
        message: "Enter a detailed description of your project:"
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide detailed information on how to install your project, assume a novice coder is reading your README:'
      },
      {
        type: 'input',
        name: 'features',
        message: 'Provide the features of your project, using examples if possible:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select how your project is licensed:',
        choices: [
          'MIT',
          'Mozilla', 
          'Boost',
          'None']
      },
      {
        type: 'confirm',
        name: 'contribute',
        message: 'Are you open to contributions to your project?',
        default: true        
      },    
      {
        type: 'input',
        name: 'confirmContribute',
        message: 'What are your requirements for accepting contributions?',   
        when: ({ contribute }) => {
          if (contribute) {
          return true;
        } else {
          return ( ``);
        }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Give some examples of test to be run for your project:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and their GitHub links: '
      },
      {
        type: 'link',
        name: 'email',
        message: 'Please enter your email address:'
      },
    ])
    .then(function(response) {
      const data = generateMarkdown(response);

      writeToFile("README.md", data);

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
     return console.log(error); 
    }
    console.log("README created!");
  })
  }    
 })
}

// Function call to initialize app

init();

