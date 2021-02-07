// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  else if (license === "Mozilla"){
    return `![License: Mozilla](https://img.shields.io/badge/license-Mozilla-blue.svg)`;
  }
  else if (license === "Boost"){
    return `![License: Boost](https://img.shields.io/badge/license-Boost-blue.svg)`;
    
  } else (license === "none")
    return ( ``)
  }

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `![MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "Mozilla"){
    return `![Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license === "Boost"){
    return `![Boost](https://opensource.org/licenses/BSL-1.0)`;
  } else (license === 'none') 
    return ( ``)
  }     

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {  
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  }
  else if (license === "Mozilla"){
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license === "Boost"){
    return `(https://opensource.org/licenses/BSL-1.0)`;
  } else (license === 'none') 
    return ( ``)
  } 
    
// TODO: Create a function to generate markdown for README 
function generateMarkdown(data) {
  return `  
  # Repository Title:   ${data.title}     ${renderLicenseBadge(data.license)} 
    

  ## Table of Contents

  * [Description](#description)

  * [Installation](#installation)

  * [Features](#features)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Credits](#credits)

  * [Questions](#questions)

  ## Descripition

  ${data.description}

  ## Installation

  ${data.installation}

  ## Features

  ${data.features}

  ## License

  Licensed by:  ${renderLicenseLink(data.license)}
  
  For more information go to:  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.confirmContribute}

  ## Tests

  ${data.tests}

  ## Credits

  ${data.credits}

  ## Questions

   GitHub Link:   https://github.com/${data.Username}

   If you have any questions please open an issue in GitHub or contact ${data.name} at ${data.email}.
`;
}

module.exports = generateMarkdown;
  