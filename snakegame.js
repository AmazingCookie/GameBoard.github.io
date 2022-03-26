const canva_border_color = "black";
const canva_background_color = "white";
const snake_border_color = "black";
const snake_background_color = "black";
const food_border_color = "red";
const food_background_color = "red";

const snake_canva = document.querySelector("#snake-game");
const snake_canva_ctx = snake_canva.getContext('2d');

const snake_height = 10;
const snake_width = 10;
let snake = [{ x: Math.round(snake_canva.width / 2), y: Math.round(snake_canva.height / 2) }];

let food = {x: -1, y: -1};

const direction = ['left', 'right', 'up', 'down'];
let current_direction = 'right'; //default

const snake_button = document.querySelector('#snake-start');
snake_button.addEventListener('click', (event) => {
    initGame();
});


function initGame () {
    generateFood();
    prcessGame();
    document.addEventListener('keydown', move);
}

function prcessGame () {

    if (isGameEnded()) {
        endGame();
        return;
    }

    setTimeout(() => {
        resetCanva();
        moveSnake(current_direction);
        drawFood();
        createSnake();
        prcessGame();
    }, 100);
}

function resetCanva () {
    snake_canva_ctx.fillStyle = canva_background_color;
    snake_canva_ctx.strokeStyle = canva_border_color;

    snake_canva_ctx.fillRect(0, 0, snake_canva.width, snake_canva.height);
    snake_canva_ctx.strokeRect(0, 0, snake_canva.width, snake_canva.height);
}

function resetSnake () {
    snake = [{ x: Math.round(snake_canva.width / 2), y: Math.round(snake_canva.height / 2) }];
}

function createSnake () {
    snake.forEach(createSubSnake);
}

function createSubSnake (snakeSubCoordinate) {
    snake_canva_ctx.fillStyle = snake_background_color;
    snake_canva_ctx.strokeStyle = snake_border_color;

    snake_canva_ctx.fillRect(snakeSubCoordinate.x, snakeSubCoordinate.y, snake_width, snake_height);
    snake_canva_ctx.strokeRect(snakeSubCoordinate.x, snakeSubCoordinate.y, snake_width, snake_height);
}

function moveSnake (current_direction) {
    let head = {x: snake[0].x, y: snake[0].y};
    switch (current_direction) {
        case 'left':
            head.x -= snake_width;
            break;

        case 'right':
            head.x += snake_width;
            break;

        case 'up':
            head.y -= snake_height;
            break;

        case 'down':
            head.y += snake_height;
            break;
    }
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        resetFood();
        generateFood();
    }
    else {
        snake.pop();
    }
}

function move (event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const key = event.keyCode;
    if (key === LEFT_KEY && (current_direction !== 'left' && current_direction !== 'right')) {
        current_direction = 'left';
    }
    else if (key === RIGHT_KEY && (current_direction !== 'left' && current_direction !== 'right')) {
        current_direction = 'right';
    }
    else if (key === UP_KEY && (current_direction !== 'up' && current_direction !== 'down')) {
        current_direction = 'up';
    }
    else if (key === DOWN_KEY && (current_direction !== 'up' && current_direction !== 'down')) {
        current_direction = 'down';
    }
    
}

function random (interval, min, max) {
    return Math.round((Math.random() * (max - min) + min) / interval) * interval;
}

function generateFood () {
    if (food.x === -1) {
        food.x = random(snake_width, 0, snake_canva.width - snake_width);
        food.y = random(snake_height, 0, snake_canva.height - snake_height);

        console.log(food);
    }

    snake.forEach((element) => {
        if (food.x === element.x && food.y === element.y) {
            resetFood();
            generateFood();
        }
    })
    
}

function resetFood () {
    [food.x, food.y] = [-1, -1];
}

function drawFood () {
    snake_canva_ctx.fillStyle = food_background_color;
    snake_canva_ctx.strokeStyle = food_border_color;

    snake_canva_ctx.fillRect(food.x, food.y, snake_width, snake_height);
    snake_canva_ctx.strokeRect(food.x, food.y, snake_width, snake_height);
}

function resetDirection () {
    current_direction = 'right';
}

function isGameEnded () {
    let isEnded = false;

    let head = snake[0];
    snake.slice(1, snake.length).forEach(element => {
        if (element.x === head.x && element.y === head.y) {
            isEnded = true;
        }
    });

    if (head.x < 0 || head.y < 0 || head.x >= snake_canva.width || head.y >= snake_canva.height) {
        isEnded = true;
    }

    return isEnded;
}

function endGame () {
    if (confirm("you die! :) \n Try Again? ")) {
        resetFood();
        resetSnake();
        resetDirection();

        generateFood();
        prcessGame();
    }
}

