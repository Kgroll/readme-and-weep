const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


//const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Include packages needed for this application
// TODO: Create a function to initialize app
// TODO: Create an array of questions for user input
function init() {
  inquirer.prompt([
      
      {
      type: 'input',
      name: 'title',
      message: 'Choose a self explaining name for you project:',     
      
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
        message: 'Provide detailed information on how tp install your project, assume a novice coder is reading your README:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide information on the usage of your project, using examples if possible:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select how your project is licensed:',
        choices: ['MIT',
         'GNU()', 
         'None']
      },
      {
        type: 'confirm',
        name: 'contribute',
        message: 'Are you open to contributions to your project?',
      
      },
      {
        type: 'input',
        name: 'confirmContribute',
        message: 'What are your requirements for accepting contributions?',           
        
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

