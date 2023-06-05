const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('./src/fileGenerator');

const teamMembers = [];

function promptManager() {
  console.log('Please enter the details of the team manager:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Manager's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Manager's email:",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Manager's office number:",
    },
  ]).then((answers) => {
    const { name, id, email, officeNumber } = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
    promptTeamMembers();
  });
}

function promptEngineer() {
  console.log('Please enter the details of an engineer:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Engineer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Engineer's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Engineer's email:",
    },
    {
      type: 'input',
      name: 'github',
      message: "Engineer's GitHub username:",
    },
  ]).then((answers) => {
    const { name, id, email, github } = answers;
    const engineer = new Engineer(name, id, email, github);
    teamMembers.push(engineer);
    promptTeamMembers();
  });
}

function promptIntern() {
  console.log('Please enter the details of an intern:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "Intern's ID:",
    },
    {
      type: 'input',
      name: 'email',
      message: "Intern's email:",
    },
    {
      type: 'input',
      name: 'school',
      message: "Intern's school:",
    },
  ]).then((answers) => {
    const { name, id, email, school } = answers;
    const intern = new Intern(name, id, email, school);
    teamMembers.push(intern);
    promptTeamMembers();
  });
}

function promptTeamMembers() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What would you like to do next?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
    },
  ]).then((answer) => {
    if (answer.role === 'Add an engineer') {
      promptEngineer();
    } else if (answer.role === 'Add an intern') {
      promptIntern();
    } else {
      generateTeamRoster();
    }
  });
}

function generateTeamRoster() {
  const rosterHTML = renderTeamRoster();
  writeFile('./dist/index.html', rosterHTML)
    .then(() => {
      console.log('Team roster generated successfully!');
    })
    .catch((err) => {
      console.log('An error occurred while generating the team roster:', err);
    });
}

function renderTeamRoster() {
  // Generate the HTML code for the team roster based on the teamMembers array
  // You can use a template literal or any other HTML generation technique here

  // Example:
  let rosterHTML = '<html>\n<head>\n<title>Team Roster</title>\n</head>\n<body>\n<h1>Team Roster</h1>\n<ul>\n';

  for (const member of teamMembers) {
    rosterHTML += `<li>${member.getRole()}: ${member.getName()}</li>\n`;
  }

  rosterHTML += '</ul>\n</body>\n</html>';

  return rosterHTML;
}

// Start by prompting for the manager's details
promptManager();
