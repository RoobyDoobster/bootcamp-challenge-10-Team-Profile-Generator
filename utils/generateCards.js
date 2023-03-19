function generateCards() {
    var roleSpec = ``;
    
    switch(teamMember.constructor.name) {
        case "Manager":
            roleSpec = `Office Number: ${teamMember.officeNum}`;
            break;
        case "Engineer":
            roleSpec = `Github: <a href="https://github.com/${teamMember.github}" target="_blank">${teamMember.github}</a>`;
            break;
        case "Intern":
            roleSpec = `School: ${teamMember.school}`;
            break;
        default:
            roleSpec = `Error`;
            break;
    }

    return `
    <div class="card">
        <div>
            <h1>${teamMember.employeeName}</h1>
            <h2>
                ${teamMember.constructor.name}
            </h2>
        </div>
        <div>
            <p>ID: ${teamMember.id}</p>
            <p>Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
            <p>${roleSpec}</p>
        </div>
    </div>`
}

module.exports = generateCards;