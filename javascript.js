function computerPlay(){
    // choose play randomly
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for(let i = 0; i < 5; ++i){
        console.log(playRound(prompt("choose rock, paper or scissors"),computerPlay()));
    }
}

game();