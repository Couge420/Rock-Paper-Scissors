alert("Hello Player!");

alert("Welcome to Rock, paper, scissors");

let humanScore = 0;
let computerScore = 0;
let roundNum = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const round = document.querySelector("#round")



function getComputerChoice() {
    const randomNumber = Math.round(Math.random() * 2 )
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
     const playerChoice = prompt("Enter your choice. Rock, paper or scissors");
     inchoice=playerChoice.toLowerCase()
     return(inchoice);
}




function playRound(humanChoice, computerChoice) {
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    if (humanChoice === 'rock' && computerChoice === 'paper'){
            computerScore++;
            alert("You lose!");
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            alert("You WIN!");
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
            computerScore++;
            alert("You lose!");
    }

    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            alert("You WIN!");
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
            computerScore++;
            alert("You lose!");
    }

    else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            alert("You WIN!");
    }

    else if (humanChoice === computerChoice){
            alert("Tie");
    }

confirm( "Computer Score = " + " " + computerScore);
confirm("Your Score = " + " " + humanScore);
}

function playGame() {
  //  for (let i = 0; i < 5; i++) {
    //    const humanSelection = getHumanChoice();
    //    const computerSelection = getComputerChoice();
        playRound();
    }

    alert('Final Scores - Human: ' + humanScore + " " + 'Computer: ' + computerScore);
    if (humanScore > computerScore) {
        alert("Congratulations! You Win!");
    } else if (humanScore < computerScore){
        alert("Sorry. You lose!");
    } else {
        alert("It's a tie!");
    }





playGame();