// tady je místo pro náš program  


let nadpis = document.querySelector("h1");



function priNajeti() {
    nadpis.classList.toggle("hover");
    lev.classList.toggle("bold");
}

function poStisknuti(udalost) {
    console.log(udalost.key);
}

function startAudio() {
    let audioFile = document.querySelector("#zvukovaStopa");
    console.log("Zpínám píseň...")
    audioFile.play();
}

let lev = document.querySelector(".lev");


