// Finder canvas
let canvas =
    document.querySelector("#canvas");

// Tegnekontekst
let ctx =
    canvas.getContext("2d");

// Finder scorefelt
let scoreTekst =
    document.querySelector("#score");

// Startposition
let x = 100;
let y = 100;

// Point
let point = 25;

// ------------------
// Flyt firkant
// ------------------
function flytFirkant() {

    x = Math.floor(Math.random() * 550);
    y = Math.floor(Math.random() * 350);
}

// ------------------
// Tegn firkant
// ------------------
function tegnFirkant() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "red";

    ctx.fillRect(
        x,
        y,
        50 - Math.floor(point / 2),
        50 - Math.floor(point / 2)
    );
}

// ------------------
// Start spil
// ------------------

flytFirkant();

tegnFirkant();

setInterval(function() {
    flytFirkant();
    tegnFirkant();
}, 1000);

// ------------------
// Klik på canvas
// ------------------
canvas.addEventListener(
    "click",
    function(event) {

    let musX = event.offsetX;
    let musY = event.offsetY;

if (
    musX >= x &&
    musX <= x + 50 - Math.floor(point / 2) &&
    musY >= y &&
    musY <= y + 50 - Math.floor(point / 2)
) 
    {

    // Giv et point
    point++;
    // Opdater score
    scoreTekst.textContent ="Point: " + point;

    // Flyt firkanten
    flytFirkant();

    // Tegn igen
    tegnFirkant();

    }

}
);