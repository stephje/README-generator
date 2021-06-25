//from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

const badges = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'Boost Software License 1.0': '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
};

// Generate the markdown for the README
function generateMarkdown(answers) {
  let selectedLicense = answers.license;
  let badge = badges[selectedLicense];

  let github = `[GitHub](https://github.com/${answers.username})`;
  let email = `[Email](mailto:${answers.email})`;

  return `
# ${answers.title}

  ${badge}
  
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
  
## Contributing
  
  ${answers.contribution}
  
## Tests
  
  ${answers.tests}
  
## Questions
  
  For any questions pertaining to this project, the developer can be reached via any of the contact methods listed below. 
  Please ensure that you include the name of this project ("${answers.title}") in any communications. 

- ${github}
- ${email}

`;
}

module.exports = generateMarkdown;
