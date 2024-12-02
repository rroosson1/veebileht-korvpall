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

function displayTulemused() {
    const tulemusedKast = document.getElementById("tulemused");

    const tulemused = globalData.tulemused[0].tulemused;

    tulemused.forEach(tulemus => {
        const listItem = document.createElement("li");
        listItem.textContent = tulemus;
        tulemusedKast.appendChild(listItem);
    });
}

window.onload = function () {
    // kui element vastava id-ga eksisteerib siis kutsub funktsiooni
    const estPlayersList = document.getElementById("eesti_mängijad");
    if (estPlayersList) {
        displayEstPlayers();
    }

    const tulemusedContainer = document.getElementById("tulemused");
    if (tulemusedContainer) {
        displayTulemused();
    }
};