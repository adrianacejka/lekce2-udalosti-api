// tady je místo pro náš program  


let lev = document.querySelector(".lev");

function priNajeti() {
    lev.classList.add("bold");
}

function poStisknuti(udalost) {
    console.log(udalost.key);
}

function startAudio() {
    let audioFile = document.querySelector("#zvukovaStopa");
    console.log("Zpínám píseň...")
    audioFile.play();
}

function poKliknuti(){
    lev.classList.toggle("color-change");
}


