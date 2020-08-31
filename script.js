//Variables : 
var playerChoice;
var computerChoice;
var reset = document.querySelector("#reset");
var options = document.getElementsByClassName("options");
var info = document.querySelector("#info");
//Choose RPS using the buttons
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
//An array for the AI RPS
var choiceOfAI = ["Rock", "Paper", "Scissors"];
//The scores
var playerScoreDOM = document.querySelector("#playerScore");
var aiScoreDOM = document.querySelector("#aiScore");
var playerScore = 0;
var aiScore = 0;
//The players names
var playerName = document.querySelector("#playerName");
var aiName = document.querySelector("#aiName");

//Functions : 

//Player Name
function choosePlayerName() {
    playerName.innerText = prompt("Choose a new name for yourself!");
}

//Enemy Name
function chooseAiName() {
    aiName.innerText = prompt("Choose a new name for your opponent!");
}

//Choosing Rock
function chooseRock() {
    playerChoice = "Rock";
    playGame();
}
//Choosing Paper
function choosePaper() {
    playerChoice = "Paper";
    playGame();
}
//Choosing Scissors
function chooseScissors() {
    playerChoice = "Scissors";
    playGame();
}

// The Actual Game Function
function playGame() {
    //Choose a random item from the AI array to play the game
    computerChoice = choiceOfAI[Math.floor(Math.random() * 3)];
    //Check Choices
    checkChoices(playerChoice, computerChoice);
    //Check to see if the player wins
    checkWinner();
};

//Function to check which of the two players wins
function checkWinner() {
    for (var i = 0; i < 100; i++) {
        if (playerScore == 5) {
            info.innerText = "You have won!";
            buttonsDisappear();
            break;
        } //Check to see if the AI wins
        else if (aiScore == 5) {
            info.innerText = "You have lost";
            buttonsDisappear();
            break;
        } else if (i == 100) {
            info.innerText = "You have played too many games without a winner. It is a draw" ;
            buttonsDisappear();
            break;
        }
    }
}

//Check the choices between players
function checkChoices(playerChoice, computerChoice) {
    //The initial IF statement for the winning condition | Add a point to the player score and update it in the HTML
    if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        info.innerText = "You have chosen " + playerChoice + ". Your opponent chose " + computerChoice + ". You have won! Congratulation!";
        playerScore++;
        playerScoreDOM.innerText = playerScore;
    } //The IF statement for draw
    else if (playerChoice == computerChoice) {
        info.innerText = "You have both chosen " + computerChoice + ". It was a draw!";
    } // The last condition in case the player loses | Add a point to the enemy score and update it in the HTML
    else {
        info.innerText = "You have chosen " + playerChoice + ". Your opponent chose " + computerChoice + ". You have lost! I am sorry!";
        aiScore++;
        aiScoreDOM.innerText = aiScore + " ";
    }

}

//Make the buttons dissapear
function buttonsDisappear() {
    fadeOut(rock);
    fadeOut(paper);
    fadeOut(scissors);
}

//Make buttons appear
function buttonsAppear() {
    fadeIn(rock);
    fadeIn(paper);
    fadeIn(scissors);
}

//The actual function to make the buttons dissapear
function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

//The actual function to make the buttons apear
function fadeIn(element) {
    element.style.display = "inline";
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50)
    info.innerText = "Click a button to start the game!";
}

//Function to reset the score 
function resetTheScore() {
    playerScore = 0;
    aiScore = 0;
    playerScoreDOM.innerText = playerScore;
    aiScoreDOM.innerText = aiScore + " ";
    buttonsAppear();
}

//Click Events

//Choose names
playerName.addEventListener("click", choosePlayerName)
aiName.addEventListener("click", chooseAiName)

//Choose Options
rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);

//Reset the Score
reset.addEventListener("click", resetTheScore)