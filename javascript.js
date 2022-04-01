let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    // choose play randomly
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ["tie","It's a tie!"];
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
        return ["player",`You win! ${playerSelection} beats ${computerSelection}`];
    } else {
        return ["computer",`You loose! ${computerSelection} beats ${playerSelection}`];
    }
}

function playerPlay(e) {
    let outcome = playRound(e.target.getAttribute('data-choice'),computerPlay());
    if(outcome[0] === "player"){
        ++playerScore;
    } else if (outcome[0] === "computer"){
        ++computerScore;
    }
    const outputDiv = document.querySelector(".output");
    const playerScoreOut = document.querySelector(".player-score");
    const computerScoreOut = document.querySelector(".computer-score");
    if(computerScore === 5){
        outputDiv.textContent = "The Computer Won the Game!";
    } else if (playerScore === 5){
        outputDiv.textContent = "You Won the Game!";
    } else {
        outputDiv.textContent = outcome[1];
    }
    playerScoreOut.textContent = `Player: ${playerScore}`;
    computerScoreOut.textContent = `Computer: ${computerScore}`;
    if (computerScore === 5 || playerScore === 5){
        playerScore = 0;
        computerScore = 0;
    }
}

const playButtons = Array.from(document.querySelectorAll('.input-button'));
playButtons.forEach(playButton => playButton.addEventListener('click', playerPlay));
