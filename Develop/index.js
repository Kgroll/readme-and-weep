const fs = require('fs');
const inquirer = require('inquirer');
const questions = [promptQuestions];
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const promptQuestions = () => {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'title',
      message: 'Choose a self explaining name for you project: (Required)',
      validate: titleInput => {
        if (titleInput) {        
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
        }
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
        name: 'licenses',
        message: 'Please select how your project is licensed:',
        choices: ['need licenses']
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
        when: ({ confirmContribute }) => {
          if (confirmContribute) {
            return true;
          } else {
            return false;
          }
        }
      },



// TODO: Create a function to write README file


function writeToFile(fileName, data) {}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
          //if theer is an error reject the Promise and send the error to the '.catch()' method
          if (err) {
              reject(err);
              //return out of the function here to make sure the Promise doesn't accidently execute the resolve function
             return; 
          }
          //if all is well, reolve the PRomise and send data to the '.then' method
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();Questions()
 //   .then(promptProject)
 //   .then(portfolioData => {      
//return  generatePage(portfolioData);
 //   })
 //   .then(pageHTML => {
 //     return writeFile(pageHTML);
 //   })
 //   .then(writeFileResponse => {
  //    console.log(writeFileResponse);
  //    return copyFile;
 //   })
 //   .then(copyFileResponse => {
  //    console.log(copyFileResponse);
  //  })
  //  .catch(err => {
  //    console.log(err);
    
}
