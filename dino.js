// board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

// dino 
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight-dinoHeight;
let dinoImg;
let dino = {
    x : dinoX,
    x : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

// cactus
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;


// velocity
let velocityX = -8; //cactus moving left speed
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

//draw in window
window.onload = function() {
    board = getElementById("board");
    board.Height = boardHeight;
    board.windowWidth = boardWidth;
    context = board.getContext("2d");

    //draw dino
    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, din.x, dino.y, dino.width, dino.height);
    }

    //draw cactus 
    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";
    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";
    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    // update funct 
    requestAnimationFrame(update);
    setInterval(placeCactus, 1000); //1000 milliseconds = 1 second
    document.addEventListener("keydown", moveDino);
}

// update
function update(){
    // requestAnimationFrame(update)   ???
    // if game over >> return
    // for()... dimo movement
    // if()... detect collisions
    // draw imgs...
    // update score...
    
}

function moveDino(){
    // if game over
    // if(condition to move dino)
    // else if(condition)
}

function placeCatus(){
    // if game over
    // draw cactus 
    // condition for change position cactus 

}

function detectCollision(a, b){
    //return....
}
