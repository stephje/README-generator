const licenseLink = {
  'MIT License': 'https://opensource.org/licenses/MIT',
  'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
  'GNU AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0',
  'GNU LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0',
  'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
  'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
  'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
  'The Unlicense': 'http://unlicense.org/'
};

const badges = {
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
  'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
  'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]',
  'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
  'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
  'Boost Software License 1.0': '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]',
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
};

// Generate the markdown for the README
function generateMarkdown(answers) {
  let selectedLicense = answers.license;
  let badge = badges[selectedLicense];
  let link = licenseLink[selectedLicense];

  let github = `[GitHub](https://github.com/${answers.username})`;
  let email = `[Email](mailto:${answers.email})`;

  return `
# ${answers.title}

  ${badge}(${link})
  
## Description
  
  ${answers.description}
   
## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
## Installation
  
  ${answers.installation}
  
## Usage
  
  ${answers.usage}
  
## License
  
  ${answers.license}

  Copyright (c) ${answers.year} ${answers.name}

  License details can be found [here](${licenseLink[selectedLicense]})

## Credits 

  ${answers.credits}
  
## Contributing
  
  ${answers.contribution}
  
## Tests
  
  ${answers.tests}
  
## Questions
  
  For any questions pertaining to this project, the developer can be reached via any of the contact methods listed below. 
  Please ensure that you include the name of this project ("${answers.title}") in any communications. 

- ${github}
- ${email}

## Screenshot of Deployed Application

  ![Screenshot of Application](${path})

  
`;
}

module.exports = generateMarkdown;
