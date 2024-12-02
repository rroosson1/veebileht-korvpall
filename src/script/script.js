// hoiab kõiki andmeid ühe funktsiooni sees, sest .json failis on kõik andmed
let globalData = null;

// fetchib andmed jsonist
function fetchData() {
    return fetch('./res/myjson.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('viga võrgus');
            }
            return response.json();
        })
        .then(data => {
            globalData = data;
            return data;
        })
        .catch(error => {
            console.error('ei saanud andmeid haarata:', error);
        });
}

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
    fetchData().then(() => {

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
    });
};