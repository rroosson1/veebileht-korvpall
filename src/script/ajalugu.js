let globalData = {
    "tekst": [
        {
            "korvpall_tutvustus": "Korvpall on võistkondlik pallimäng, mida harilikult mängitakse saalis kahe võistkonna vahel. Mängu eesmärgiks on visata pall reeglitele vastavalt vastase korvi ning takistada vastasel viskamast palli enda korvi. Korvi langenud pallidelt arvestatakse võistkonnale punkte. Mängu lõpuks rohkem punkte kogunud võistkond võidab.",
            "korvpall_ajalugu": {
                "sisu": "Korvpalli leiutas 1891. aastal Springfieldis (USA) kohaliku ülikooli kehalise kasvatuse õpetaja James Naismith. Aastal 1892 peeti seal ka esimene ametlik võistlus, mis lõppes 1 : 0. Ainukese korvi viskas William R. Chase. USA-st levis korvpall sportmänguna Aasiasse, hiljem Euroopasse, Lõuna-Ameerikasse ja mujale. 19. sajandi lõpus sai alguse elukutseliste korvpall.",
                "allikas": "https://en.wikipedia.org/wiki/Basketball"
            }
        }
    ]
};



function kuvaTekst(valik) {
    const tekst = globalData.tekst[0];

    // valib teksti vastavalt parameetrile
    const tekstKast = document.getElementById(valik);

    let p = tekstKast.querySelector("p");
    let link = tekstKast.querySelector("a");

    // kui paragraph on olemas, muudab selle nähtavust
    if (p) {
        if (p.style.display === "none") {
            p.style.display = "block";
            if (link) link.style.display = "block";
        } else {
            p.style.display = "none";
            if (link) link.style.display = "none";
        }
    } else {
        // kui paragraph ei ole olemas, loob selle
        p = document.createElement("p");

        if (valik === "korvpall_ajalugu") {
            p.textContent = tekst[valik].sisu;

            // loob lingi allikale
            link = document.createElement("a");
            link.href = tekst[valik].allikas;
            link.textContent = "Allikas";
            link.target = "_blank";
            link.style.display = "block";

            tekstKast.appendChild(p);
            tekstKast.appendChild(link);
        } else {
            p.textContent = tekst[valik];
            tekstKast.appendChild(p);
        }
    }
}
