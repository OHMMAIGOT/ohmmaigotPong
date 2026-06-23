const canvas = document.getElementById("canvas");
const brush = canvas.getContext('2d');

let ballx = 735;
let bally = 350; 
let ballSpeedx = 10;
let ballSpeedy = 10;

let playery = 250;
let opponenty = 250;

let playerScore = 0;
let opponentScore = 0;

let wHeld = false;
let sHeld = false;
let upHeld = false;
let downHeld = false;
let spaceHeld = false;
let playerHeld = false;
let opponentHeld = false;
let throwUp = false;
let throwDown = false;