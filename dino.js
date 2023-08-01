// board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

// dino 

// cactus

// .....
let gameOver = false;
let score = 0;

//draw in window
window.onload = function() {
    board = getElementById("board");
    board.Height = boardHeight;
    board.windowWidth = boardWidth;
    context = board.getContext("2d");
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
