// link of confirmed license badge(s)

const licenseBadge = (licenseConfirm, license, github, githubRepo) => {
  if(licenseConfirm) {
    const licenseLink = 'https://img.shields.io/github/license/' + github + '/' + githubRepo
    return `![GitHub](${ licenseLink })`
  } else {
    license = encodeURI(license);
    return `![license badge](https://img.shields.io/badge/license-${ license }-brightgreen)`
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${ licenseBadge(data.licenseConfirm, data.license, data.github, data.githubRepo) }
  ## Description
  ${ data.description }
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${ data.installation }
  ## Usage
  ${ data.usage }
  ## License
  This project uses ${ licenseBadge(data.licenseConfirm, data.license, data.github, data.githubRepo) }. You can get more information on licenses [here](https://choosealicense.com/).
  ## Contributing
  ${ data.contributing}
  ## Tests
  ${ data.tests }
  ## Questions? Please contact me:
  * [My GitHub Profile](https://github.com/${ data.github })
  * [My Github Project Repository](https://jcgom3.github.io/${ data.githubRepo })
  * Email me at: [${ data.email }](mailto:${ data.email }) with questions or make an issue about this project.
`;
};

module.exports = generateMarkdown;
