alert("Hello Player!");

alert("Welcome to Rock, paper, scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2 )
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
     playerChoice = prompt("Enter your choice. Rock, paper or scissors");
     inchoice=playerChoice.toLowerCase()
     return(inchoice);
}


function playRound() {
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

}