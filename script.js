var boardRep = [[],[],[],[],[],[],[],[],[],[]];
const SNAKE_BODY = "0";
const FOOD = "1";
const SNAKE_POS = [[5,6],[5,7], [5,8]]
var score = document.getElementById("score");
score.innerHTML = `<h1 id="score">${SNAKE_POS.length}</h1>`;

function populateRepBoard() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (boardRep[i][j] === FOOD) {
                continue;
            }
            else {
                boardRep[i][j] = '';
            }
            
            
            
        }
    }
    SNAKE_POS.forEach(item => boardRep[item[0]][item[1]] = SNAKE_BODY);

}
populateRepBoard();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomFood() {
    boardRep[getRandomInt(10)][getRandomInt(10)] = FOOD;
}
generateRandomFood();

function populateBoard() {
    var table = document.getElementById("snakee");
    for (let i = 0; i < 10; i++) {
        var row = table.insertRow(i);
        for (let j = 0; j < 10; j++) {
            var cell = row.insertCell(j);
            if (boardRep[i][j] === FOOD) {
                cell.className = "food";
            }
            if (boardRep[i][j] === SNAKE_BODY) {
                cell.className = "snake";
            }
            
        }
    }
}
populateBoard();

function renderBoard() {
    var table = document.querySelectorAll("td");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (boardRep[i][j] === SNAKE_BODY) {
                table.item(i*10+j).className = "snake";
            }
            else if (boardRep[i][j] === FOOD) {
                table.item(i*10+j).className = "food";
            }
            else {
                table.item(i*10+j).className = '';
            }
        }
    }
}


var direction = [1, 0];
document.addEventListener("keydown", function (event) {
    // and direction is not ,d
    if (event.key === 'w') {
        direction = [-1, 0];
    }
    else if (event.key === 'a') {
        direction = [0, -1];
    }
    else if (event.key === 's') {
        direction = [1, 0];
    }
    else if (event.key === 'd') {
        direction = [0, 1];
    }


    
});
const interval = setInterval(function () {
    SNAKE_POS.push([SNAKE_POS[SNAKE_POS.length - 1][0] + direction[0], SNAKE_POS[SNAKE_POS.length - 1][1] + direction[1]]);
    SNAKE_HEAD = SNAKE_POS[SNAKE_POS.length - 1];
    if (boardRep[SNAKE_HEAD[0]][SNAKE_HEAD[1]] === FOOD) {
        generateRandomFood();
    } else {
        SNAKE_POS.shift();
    }
    
    
    populateRepBoard();
    renderBoard();
    var score = document.getElementById("score");
    score.innerHTML = `<h1 class="cent" id="score">${SNAKE_POS.length}</h1>`;
},200);
