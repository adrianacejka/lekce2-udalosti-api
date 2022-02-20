// tady je místo pro náš program  


let lev = document.querySelector(".lev");

function priNajeti() {
    lev.classList.add("bold");
}

function poStisknuti(udalost) {
    console.log(udalost.key);
}



function poKliknutiCerveny() {
    lev.classList.toggle("color-change");
}

let size = 16;

function poKliknutiVetsi() {
    size = size + 1;
    lev.style.fontSize = size + 'px';
}

function startAudio() {
    let audioFile = document.querySelector("#zvukovaStopa");
    console.log("Zapínám píseň...");
    audioFile.play();
}

function pauseAudio() {
    let audioFile = document.querySelector("#zvukovaStopa");
    console.log("Pauza");
    audioFile.pause();
}