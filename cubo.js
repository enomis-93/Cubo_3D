//Aggancio i bottoni
let leftBtn = document.querySelector(".left-arrow");
let rightBtn = document.querySelector(".right-arrow");
let rotateBtn = document.querySelector(".play");

//Aggancio i tre cubi
let cube1 = document.querySelector(".cube-1");
let cube2 = document.querySelector(".cube-2");
let cube3 = document.querySelector(".cube-3");

//Definisco una variabile con posizione di partenza uguale a 0
let position = 0;

// Al click del bottone di sinistra modifico lo stile di tutti e 3 cubi facendoli ruotare sul suo asseY
leftBtn.addEventListener("click", function () {
  position -= 90;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

rightBtn.addEventListener("click", function () {
  position += 90;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

/// Eventi mouseover e mouse per il BOTTONE DI SINISTRA che fanno ruotare l'immagine di soli 30deg
leftBtn.addEventListener("mouseover", function () {
  position -= 30;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

leftBtn.addEventListener("mouseout", function () {
  position += 30;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

/// Eventi mouseover e mouse per il BOTTONE DI DESTRA che fanno ruotano l'immagine di soli 30deg
rightBtn.addEventListener("mouseover", function () {
  position += 30;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

rightBtn.addEventListener("mouseout", function () {
  position -= 30;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
});

//Funzione per rotazione continua al Play
function rotateContinue() {
  position += 90;
  cube1.style.transform = `rotateY(${position}deg)`;
  cube2.style.transform = `rotateY(${position}deg)`;
  cube3.style.transform = `rotateY(${position}deg)`;
}

let startRotate = false;

rotateBtn.addEventListener("click", function (e) {
  startRotate = !startRotate;
  if (startRotate) {
    rotate = setInterval(rotateContinue, 1000);
    let btnIcon = e.target.childNodes[0];
    btnIcon.classList.replace("fa-play", "fa-pause");
  } else {
    let btnIcon = e.target.childNodes[0];
    btnIcon.classList.replace("fa-pause", "fa-play");
    clearInterval(rotate);
  }
});
