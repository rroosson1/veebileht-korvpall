let globalData = {
    "estPlayers": [{
        "name": [
            "Artur Konontšuk",
            "Gregor Kuuba",
            "Hugo Toom",
            "Janari Jõesaar",
            "Joonas Riismaa",
            "Kaspar Treier",
            "Kasper Suurorg",
            "Kregor Hermet",
            "Kristian Kullamäe",
            "Leemet Böckler",
            "Maik-Kalev Kotsar",
            "Matthias Tass",
            "Mikk Jurkatamm",
            "Siim-Markus Post",
            "Siim-Sander Vene",
            "Taavi Jurkatamm"
        ]
    }],
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
    "tekst": [
        {
            "korvpall_tutvustus": "Korvpall on võistkondlik pallimäng, mida harilikult mängitakse saalis kahe võistkonna vahel. Mängu eesmärgiks on visata pall reeglitele vastavalt vastase korvi ning takistada vastasel viskamast palli enda korvi. Korvi langenud pallidelt arvestatakse võistkonnale punkte. Mängu lõpuks rohkem punkte kogunud võistkond võidab.",
            "korvpall_ajalugu": "Korvpalli leiutas 1891. aastal Springfieldis (USA) kohaliku ülikooli kehalise kasvatuse õpetaja James Naismith. Aastal 1892 peeti seal ka esimene ametlik võistlus, mis lõppes 1 : 0. Ainukese korvi viskas William R. Chase. USA-st levis korvpall sportmänguna Aasiasse, hiljem Euroopasse, Lõuna-Ameerikasse ja mujale. 19. sajandi lõpus sai alguse elukutseliste korvpall."
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
    ],
    "tulemused": [
        {
            "tulemused": [
                "Euroopa meistrivõistlustel - 5. koht",
                "Maailmameistrivõistlustel - Pole osavõtte",
                "Olümpiamängud - jagati 9. - 14. kohta"
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

function displayEstPlayers() {
    const mängijateList = document.getElementById("eesti_mängijad");

    const mängijad = globalData.estPlayers[0].name;

    // käib kõik nimed läbi ja lisab need listi
    mängijad.forEach(mängija => {
        const list = document.createElement("li");
        list.textContent = mängija;
        mängijateList.appendChild(list);
    });
}

function kuvaTekst(valik) {
    const tekst = globalData.tekst[0];

    // valib teksti vastavalt parameetrile
    const tekstKast = document.getElementById(valik);

    let p = tekstKast.querySelector("p");

    if (p) {
        if (p.style.display === "none") {
            p.style.display = "block";
        }
        else {
            p.style.display = "none";
        }
    } else {
        // kui paragraph ei ole olemas, loob selle
        p = document.createElement("p");
        p.textContent = tekst[valik];
        tekstKast.appendChild(p);
    }
}

function displayTulemused() {
    const tulemusedKast = document.getElementById("tulemused");

    const tulemused = globalData.tulemused[0].tulemused;

    tulemused.forEach(tulemus => {
        const listItem = document.createElement("li");
        listItem.textContent = tulemus;
        tulemusedKast.appendChild(listItem);
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

    const estPlayersList = document.getElementById("eesti_mängijad");
    if (estPlayersList) {
        displayEstPlayers();
    }

    const tulemusedContainer = document.getElementById("tulemused");
    if (tulemusedContainer) {
        displayTulemused();
    }
};
