let globalData = {
    "tekst": [
        {
            "korvpall_tutvustus": "Korvpall on võistkondlik pallimäng, mida harilikult mängitakse saalis kahe võistkonna vahel. Mängu eesmärgiks on visata pall reeglitele vastavalt vastase korvi ning takistada vastasel viskamast palli enda korvi. Korvi langenud pallidelt arvestatakse võistkonnale punkte. Mängu lõpuks rohkem punkte kogunud võistkond võidab.",
            "korvpall_ajalugu": "Korvpalli leiutas 1891. aastal Springfieldis (USA) kohaliku ülikooli kehalise kasvatuse õpetaja James Naismith. Aastal 1892 peeti seal ka esimene ametlik võistlus, mis lõppes 1 : 0. Ainukese korvi viskas William R. Chase. USA-st levis korvpall sportmänguna Aasiasse, hiljem Euroopasse, Lõuna-Ameerikasse ja mujale. 19. sajandi lõpus sai alguse elukutseliste korvpall."
        }
    ]
};

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