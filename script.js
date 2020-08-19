//Variables : 
var playerChoice;
var computerChoice;
var reset = document.querySelector("#reset");
var options = document.getElementsByClassName("options")
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
//Choose the names for the players :
//Player Name
function choosePlayerName() {
    playerName.innerText = prompt("Choose a new name for yourself!");
}
//Enemy Name
function chooseAiName() {
    aiName.innerText = prompt("Choose a new name for your enemy!");
}

//Select the option and play the game
//Rock
function chooseRock() {
    playerChoice = "Rock";
    playGame();
}
//Paper
function choosePaper() {
    playerChoice = "Paper";
    playGame();
}
//Scissors
function chooseScissors() {
    playerChoice = "Scissors";
    playGame();
}

// The Actual Game Function
function playGame() {
    //Choose a random item from the AI array to play the game
//    computerChoice = choiceOfAI[Math.floor(Math.random() * 3)];
    computerChoice = "Scissors";
    //The initial IF statement for the winning condition | Add a point to the player score and update it in the HTML
    if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        alert("You have chosen " + playerChoice + ". Your opponent chose " + computerChoice + ". You have won! Congratulation!");
        playerScore++;
        playerScoreDOM.innerText = playerScore;
    } //The IF statement for draw
    else if (playerChoice == computerChoice) {
        alert("You have both chosen " + computerChoice + ". It was a draw!");
    } // The last condition in case the player loses | Add a point to the enemy score and update it in the HTML
    else {
        alert("You have chosen " + playerChoice + ". Your opponent chose " + computerChoice + ". You have lost! I am sorry!");
        aiScore++;
        aiScoreDOM.innerText = aiScore + " ";
    }
    //Check to see if the player wins
    checkWinner();
};


//Function to check if one of the two players wins
function checkWinner() {
    for (var i = 0; i < 100; i++) {
        if (playerScore == 5) {
            alert("You have won!");
            buttonsAppear();
            break;
        } //Check to see if the AI wins
        else if (aiScore == 5) {
            alert("You have lost");
            buttonsAppear();
            break;
        } else if (i == 100) {
            alert("You have played too many games without a winner. It is a draw");
            buttonsAppear();
            break;
        }
    }
}

//Function to reset the score 
function resetTheScore() {
    playerScore = 0;
    aiScore = 0;
    playerScoreDOM.innerText = playerScore;
    aiScoreDOM.innerText = aiScore + " ";
    buttonsDisappear();    
}

function buttonsAppear() {
    rock.classList.add("options");
    paper.classList.add("options");
    scissors.classList.add("options");
}

function buttonsDisappear() {
    rock.classList.remove("options");
    paper.classList.remove("options");
    scissors.classList.remove("options");
}
// Click Events : 

//Choose names
playerName.addEventListener("click", choosePlayerName)
aiName.addEventListener("click", chooseAiName)

//Choose Options
rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);

//Reset the Score
reset.addEventListener("click", resetTheScore)
