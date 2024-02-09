const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var snake = [{
    x: 0,
    y: 0
},
]
var d = 39;

var food = {
    x: (parseInt(Math.random()*500/25))*25,
    y: (parseInt(Math.random()*500/25))*25
}

function drawSnake(){
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "white";
    ctx.beginPath();
    // ctx.rect(snake[0].x, snake[0].y, 25, 25);
    // ctx.fill();

    for (var i = 1; i<snake.length; i++){
        ctx.rect(snake[i].x, snake[i].y, 25, 25);
        ctx.fill();
    }
    ctx.fillStyle = "red";
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

    // console.log("Key pressed: "  + event.key + " (Code: " + event.keyCode + ")");
    switch(event.keyCode){

        case 37: //left
        d=37;
        // drawSnake();
        break;

        case 38: //up
        d=38;
        // drawSnake();
        break;

        case 39: //right
        d=39;
        // drawSnake();
        break;

        case 40: //down
        d=40;
        // drawSnake();
        break;
    }

}
document.addEventListener("keydown", handleKeyDown);

function drawFood(){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(food.x, food.y, 25, 25);
    ctx.fill();
    // console.log(food);
}

function newfood(){
    food.x = (parseInt(Math.random()*500/25))*25,
    food.y = (parseInt(Math.random()*500/25))*25
}

function everyInterval(){
    // console.log('running everyinterval');

    var snakeog = JSON.parse(JSON.stringify(snake));
    if(d == 37){
        snake[0].x-=25;
    }
    else if(d == 38){
        snake[0].y-=25;
    }
    else if(d == 39){
        snake[0].x+=25;
    }
    else if(d == 40){
        snake[0].y+=25;
    }

    for (var i = 1; i<snake.length; i++){
        snake[i] = snakeog[i-1]
    }

    if (snake[0].x<0||snake[0].x>=500||snake[0].y<0||snake[0].y>=500) {
        snake = snakeog;
        console.log(snake, snakeog);

    }
    drawSnake();

    if(snake[0].x == food.x && snake[0].y == food.y){
        newfood();
        snake.push(snakeog[snakeog.length-1])
    }
    drawFood();
}


setInterval(everyInterval, 250);