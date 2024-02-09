const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var snake = [{
    x: 0,
    y: 0,
    d: 37
}]
var food = {
    x: (parseInt(Math.random()*500/25))*25,
    y: (parseInt(Math.random()*500/25))*25
}

function drawSnake(){
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "red";
    ctx.beginPath();

    ctx.rect(snake[0].x, snake[0].y, 25, 25);
    ctx.fill();
}

window.onload = function(){
    canvas.width = 500;
    canvas.height = 500;
    drawSnake();
    drawFood();
};

function handleKeyDown(event){
    var snakeog = {x: snake[0].x, y: snake[0].y};
    console.log("Key pressed: "  + event.key + " (Code: " + event.keyCode + ")");
    switch(event.keyCode){

        case 37: //left
        snake[0].x-=25;
        drawSnake();
        break;

        case 38: //up
        snake[0].y-=25
        drawSnake();
        break;

        case 39: //right
        snake[0].x+=25
        drawSnake();
        break;

        case 40: //down
        snake[0].y+=25
        drawSnake();
        break;
    }
    if (snake[0].x<0||snake[0].x>=500||snake[0].y<0||snake[0].y>=500) {
        snake = snakeog;
        drawSnake();
    }



    if(snake[0].x == food.x && snake[0].y == food.y){
        newfood();
    }
    drawFood();
}
document.addEventListener("keydown", handleKeyDown);

function drawFood(){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(food.x, food.y, 25, 25);
    ctx.fill();
    console.log(food);
}

function newfood(){
    food.x = (parseInt(Math.random()*500/25))*25,
    food.y = (parseInt(Math.random()*500/25))*25
}