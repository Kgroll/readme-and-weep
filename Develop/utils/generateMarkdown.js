var md = require("node-markdown").Markdown;
var html = md("**markdown** string");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README ${response.title}
function generateMarkdown(data) {
  return `
  
  # Repository Title
  
  https://github.com/${data.Username}/${data.title}
  
  # GitHub Link
  
  

  # Descripition

  ${data.description}

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  -[Contact Information](#contact)

  #Installation

  ${data.installation}

  #Usage

  ${data.usage}

  #License

  ${data.license}

  #Contributing

  Contributors: ${data.contributing}

  #Tests

  ${data.tests}

  #Questions

  If you have any questions please open an issue in GitHub or contact ${data.Username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
  