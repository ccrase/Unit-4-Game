//assign global variables
//var array = [];
var score = 0;
var wins = 0;
var loss = 0;
var gameStart = false;
var numToGuess;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
//reset function to randomize numbers and reset score
function resetGame(){
    score = 0;
    numToGuess = Math.floor((Math.random() * (120-19)) + 19);
    crystal1 = Math.floor((Math.random() * 12) + 1);
    //array.push(crystal1)
    crystal2 = Math.floor((Math.random() * 12) + 1);
    //array.push(crystal2)
    crystal3 = Math.floor((Math.random() * 12) + 1);
    //array.push(crystal3)
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

//reset the Dom with the new target number and zero'd out score
function resetDom(){
    $('#score').text("Collection: " + score);
    $('#numToGuess').text("Target: " + numToGuess);
    startGame();
};

//check to make sure the game is not started, start the game
function startGame(){
    if(!gameStart){
        gameStart = true;
        guessClicks();
    }
};

//with each click for each crystal
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

//update Dom with new collection value
function updateDom(){
    $('#score').text("Collection: " + score);
};

//check to see if the user has won or lost and reset the game regardless of situation, update win or loss
function checkWin(){
    if(score === numToGuess){
        wins++
        $('#wins').text("Wins: " + wins);
        winAnimate();
    }
    else if(score > numToGuess){
        loss++;
        loseAnimate();
    };
};

function winAnimate(){
    $('#song')[0].play();
    var magic = $("#appear");
        magic.show();
        magic.animate({ width:'500px', opacity: '0.9', top: '20px', left: '200px'}, 1000);
        magic.animate({width: '100px',  opacity: '0.6', top: '200px', left: '400px'}, 2000);
        magic.animate({ width:'500px', opacity: '0.9', top: '20px', left: '200px'}, 2000);
        magic.animate({width: '100px',  opacity: '0', top: '300px', left: '400px'}, 2000);


        resetGame();
};

function loseAnimate(){
    $('#loss').text("Losses: " + loss); 
    $('#loss').animate({"font-size": "30"}, 500);
    $('#loss').animate({"font-size": "16"}, 500);
    resetGame();
};



