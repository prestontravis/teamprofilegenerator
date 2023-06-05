// Generate the HTML page with the provided team roster data
function generatePage(teamRoster) {
  // Create the HTML content using template literals
  const pageContent = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <h1>Team Roster</h1>
    </header>
  
    <main>
      <section class="team-members">
        ${generateTeamMembers(teamRoster)}
      </section>
    </main>
  
    <script src="script.js"></script>
  </body>
  
  </html>
  `;
  
  return pageContent;
}

// Generate the HTML content for the team members section
function generateTeamMembers(teamRoster) {
  let teamMembersHTML = '';
  
  // Iterate over each team member and generate their HTML representation
  teamRoster.forEach((member) => {
    const { name, role, id, email, specificAttribute } = member;
    
    // Customize the HTML content based on the specific role and attributes
    let memberHTML = '';
    if (role === 'Manager') {
      memberHTML = `
      <div class="manager">
        <h2>${name}</h2>
        <p>Role: ${role}</p>
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        <p>Specific Attribute: ${specificAttribute}</p>
      </div>
      `;
    } else if (role === 'Engineer') {
      memberHTML = `
      <div class="engineer">
        <h2>${name}</h2>
        <p>Role: ${role}</p>
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        <p>Specific Attribute: ${specificAttribute}</p>
      </div>
      `;
    } else if (role === 'Intern') {
      memberHTML = `
      <div class="intern">
        <h2>${name}</h2>
        <p>Role: ${role}</p>
        <p>ID: ${id}</p>
        <p>Email: ${email}</p>
        <p>Specific Attribute: ${specificAttribute}</p>
      </div>
      `;
    }
    
    teamMembersHTML += memberHTML;
  });
  
  return teamMembersHTML;
}

module.exports = generatePage;
