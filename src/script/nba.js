let globalData = {
    "regions": [
        {
            "Atlantic": ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors"],
            "Central": ["Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks"],
            "Southeast": ["Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards"],
            "Northwest": ["Denver Nuggets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Portland Trail Blazers", "Utah Jazz"],
            "Pacific": ["Golden State Warriors", "LA Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings"],
            "Southwest": ["Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonio Spurs"]
        }
    ],
    "parimad_mängijad": [
        {
            "mängijad": [
                "Lebron James - Los Angeles Lakers",
                "Stephen Curry - Golden State Warriors",
                "Victor Wembanyama - San Antonio Spurs",
                "Luka Dončić - Dallas Mavericks",
                "Kyrie Irving - Dallas Mavericks",
                "Nikola Jokić - Denver Nuggets",
                "Anthony Edwards - Minnesota Timberwolves",
                "Giannis Antetokounmpo - Milwaukee Bucks",
                "Jayson Tatum - Boston Celtics",
                "Kevin Durant - Phoenix Suns"
            ]
        }
    ]
};

// funktsiooni tiimide kuvamiseks
function displayTeams() {

    const tabelBody = document.getElementById("tiimidTabel");

    // kasutab globaalset muutujat, mis hoiab json-i andmeid
    const regions = globalData.regions[0];
    const regionVõtmed = Object.keys(regions);
    const maxTiimid = Math.max(...regionVõtmed.map(region => regions[region].length));

    // loob read vastavalt tiimide kogusele
    for (let i = 0; i < maxTiimid; i++) {
        const rida = document.createElement("tr");

        regionVõtmed.forEach(region => {
            const cell = document.createElement("td");
            const tiimiNimi = regions[region][i];

            if (tiimiNimi) {
                cell.textContent = tiimiNimi;
            }
            rida.appendChild(cell);
        });
        tabelBody.appendChild(rida);
    }
}

// funktsioon parimate mängijate kuvamiseks
function displayBestPlayers() {
    const playersList = document.getElementById("mängijad");

    const players = globalData.parimad_mängijad[0].mängijad;

    players.forEach(player => {
        const listItem = document.createElement("li");
        listItem.textContent = player;
        playersList.appendChild(listItem);
    });
}

// kui leht avatakse, kutsub funktsiooni
window.onload = function () {

    // kui element vastava id-ga eksisteerib siis kutsub funktsiooni
    const teamsTable = document.getElementById("tiimidTabel");
    if (teamsTable) {
        displayTeams();
    }

    const playersList = document.getElementById("mängijad");
    if (playersList) {
        displayBestPlayers();
    }
};