var array = [];
var score = 0;
var wins = 0;
var loss = 0;
var gameStart = false;
var numToGuess;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

function resetGame(){
    score = 0;
    numToGuess = Math.floor((Math.random() * (120-19)) + 19);
    crystal1 = Math.floor((Math.random() * 12) + 1);
    array.push(crystal1)
    crystal2 = Math.floor((Math.random() * 12) + 1);
    array.push(crystal2)
    crystal3 = Math.floor((Math.random() * 12) + 1);
    array.push(crystal3)
    crystal4 = Math.floor((Math.random() * 12) + 1); 
    //array.push(crystal4)
    //randomCheck();
    resetDom();
    console.log(crystal1,crystal2, crystal3, crystal4, numToGuess);

};
resetGame();

/*function randomCheck(){
    console.log(array);
    if(array[0] === array[1] || array[2] || array[3]){
        resetGame();
    }
    else if(array[1] === array[0] || array[2] || array[3]){
        resetGame();
    }
    else if(array[2] === array[0] || array[1] || array[3]){
        resetGame();
    }
    else if(array[3] === array[0] || array[1] || array[2]){
        resetGame();
    }
};*/

function startGame(){
    if(!gameStart){
        gameStart = true;
        guessClicks();
    }
}

function resetDom(){
    $('#score').text("Total Score: " + score);
    $('#numToGuess').text("Random Number: " + numToGuess);
    startGame();
};

function guessClicks(){
        $('#crystal1').on('click', function(){
        score += crystal1;
        updateDom();
        checkWin();
        });

        $('#crystal2').on('click', function(){
        score += crystal2;
        updateDom();
        checkWin();
        });

        $('#crystal3').on('click', function(){
        score += crystal3;
        updateDom();
        checkWin();
        });

        $('#crystal4').on('click', function(){
        score += crystal4;
        updateDom();
        checkWin();
        });
};

function checkWin(){
    if(score === numToGuess){
        wins++
        $('#wins').text("WINS: " + wins);
        resetGame();
    }
    else if(score > numToGuess){
        resetGame(); loss++;
        $('#loss').text("LOSS: " + loss);      
        resetGame(); 
        
    };
};

function updateDom(){
    $('#score').text("Total Score: " + score);
};