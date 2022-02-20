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


let audioFile = document.querySelector("#zvukovaStopa");

function startAudio() {
    console.log("Zapínám píseň...");
    audioFile.play();
}

function pauseAudio() {  
    console.log("Pauza");
    audioFile.pause();
}

function lowVolume() {
    console.log("Ticho...");
    audioFile.volume = 0;
}

function okVolume() {
    console.log("Zvuk tak akorát...");
    audioFile.volume = 0.5;
}

function heighVolume() {
    console.log("Tohle fakt řve...");
    audioFile.volume = 1;
}

function fromStart() {
    console.log("Pouštím od začátku...");
    audioFile.currentTime = "0";
}