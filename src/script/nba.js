let globalData = {
    "regions": [
        {
            "Atlantic": [
                { "name": "Boston Celtics", "link": "https://www.nba.com/team/1610612738/celtics" },
                { "name": "Brooklyn Nets", "link": "https://www.nba.com/team/1610612751/nets" },
                { "name": "New York Knicks", "link": "https://www.nba.com/team/1610612752/knicks" },
                { "name": "Philadelphia 76ers", "link": "https://www.nba.com/team/1610612755/sixers" },
                { "name": "Toronto Raptors", "link": "https://www.nba.com/team/1610612761/raptors" }
            ],
            "Central": [
                { "name": "Chicago Bulls", "link": "https://www.nba.com/team/1610612741/bulls/" },
                { "name": "Cleveland Cavaliers", "link": "https://www.nba.com/team/1610612739/cavaliers/" },
                { "name": "Detroit Pistons", "link": "https://www.nba.com/team/1610612765/pistons/" },
                { "name": "Indiana Pacers", "link": "https://www.nba.com/team/1610612754/pacers/" },
                { "name": "Milwaukee Bucks", "link": "https://www.nba.com/team/1610612749/bucks/" }
            ],
            "Southeast": [
                { "name": "Atlanta Hawks", "link": "https://www.nba.com/team/1610612737/hawks/" },
                { "name": "Charlotte Hornets", "link": "https://www.nba.com/team/1610612766/hornets/" },
                { "name": "Miami Heat", "link": "https://www.nba.com/team/1610612748/heat/" },
                { "name": "Orlando Magic", "link": "https://www.nba.com/team/1610612753/magic/" },
                { "name": "Washington Wizards", "link": "https://www.nba.com/team/1610612764/wizards/" }
            ],
            "Northwest": [
                { "name": "Denver Nuggets", "link": "https://www.nba.com/team/1610612743/nuggets/" },
                { "name": "Minnesota Timberwolves", "link": "https://www.nba.com/team/1610612750/timberwolves/" },
                { "name": "Oklahoma City Thunder", "link": "https://www.nba.com/team/1610612760/thunder/" },
                { "name": "Portland Trail Blazers", "link": "https://www.nba.com/team/1610612757/blazers/" },
                { "name": "Utah Jazz", "link": "https://www.nba.com/team/1610612762/jazz/" }
            ],
            "Pacific": [
                { "name": "Golden State Warriors", "link": "https://www.nba.com/team/1610612744/warriors/" },
                { "name": "LA Clippers", "link": "https://www.nba.com/team/1610612746/clippers/" },
                { "name": "Los Angeles Lakers", "link": "https://www.nba.com/team/1610612747/lakers/" },
                { "name": "Phoenix Suns", "link": "https://www.nba.com/team/1610612756/suns/" },
                { "name": "Sacramento Kings", "link": "https://www.nba.com/team/1610612758/kings/" }
            ],
            "Southwest": [
                { "name": "Dallas Mavericks", "link": "https://www.nba.com/team/1610612742/mavericks/" },
                { "name": "Houston Rockets", "link": "https://www.nba.com/team/1610612745/rockets/" },
                { "name": "Memphis Grizzlies", "link": "https://www.nba.com/team/1610612763/grizzlies/" },
                { "name": "New Orleans Pelicans", "link": "https://www.nba.com/team/1610612740/pelicans/" },
                { "name": "San Antonio Spurs", "link": "https://www.nba.com/team/1610612759/spurs/" }
            ]
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

        // käib tiimid läbi ja loob iga tiimi jaoks lahtri
        regionVõtmed.forEach(region => {
            const cell = document.createElement("td");
            const team = regions[region][i];

            // kui tiim on olemas, loob lingi
            if (team) {
                const link = document.createElement("a");
                link.href = team.link;
                link.textContent = team.name;
                link.target = "_blank";
                cell.appendChild(link);
            }
            rida.appendChild(cell);
        });
        tabelBody.appendChild(rida);
    }
}


// funktsioon parimate mängijate kuvamiseks
function displayBestPlayers() {
    const playersList = document.getElementById("mängijad");

    // kasutab globaalset muutujat, mis hoiab andmeid
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