

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
  
  # Repository Title:   ${data.title}

  
  
  
  ## Descripition

  ${data.description}

  ## Table of Contents

  1. [Description](#description)

  2. [Installation](#installation)

  3. [Usage](#usage)

  4. [License](#license)

  5. [Contributing](#contributing)

  6. [Tests](#tests)

  7. [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.confirmContribute}

  ## Tests

  ${data.tests}

  ## Questions

   GitHub Link:   https://github.com/${data.Username}

   If you have any questions please open an issue in GitHub or contact ${data.name} at ${data.email}.
`;
}

module.exports = generateMarkdown;
  