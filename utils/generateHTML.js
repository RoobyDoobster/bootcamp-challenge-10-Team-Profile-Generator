function generateHTML(teamCards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="id=edge" />
    <title>Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
</head>

<body>
    <header class="container-fluid">
        <div class="myTeam col-12 p-5 mb-3">
            <h1 class="text-center">My Team</h1>
        </div>
    </header>
    <main class="container">
        ${teamCards}
    </main>
</body>
</html>`
}

module.exports = generateHTML;