var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// Calculates computer's choice randomly
var computerChoice = Math.random();
if(computerChoice < 0.34){
    computerChoice = "rock";
} else if(computerChoice <= 0.67){
    computerChoice = "paper";
} else{
    computerChoice = "scissors";
}

//if a player chooses rock
rock.addEventListener("click", function(){
    playerChoice = "rock";
    getWinner(computerChoice, playerChoice);
});

//if a player chooses paper
paper.addEventListener("click", function(){
    playerChoice = "paper";
    getWinner(computerChoice, playerChoice);
});

//if a player chooses scissors
scissors.addEventListener("click", function(){
    playerChoice = "scissors";
    getWinner(computerChoice, playerChoice);
});


//calculates the winner and displays the result in a paragraph
function getWinner(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        document.getElementById("result").textContent = "It's a tie!"
    }
    else if (computerChoice === "rock"){
        if(playerChoice === "scissors"){
            document.getElementById("result").textContent = "Computer chose rock, computer wins!";
        } else {
            document.getElementById("result").textContent = "You win!";
        }
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "rock"){
            document.getElementById("result").textContent = "Computer chose paper, computer wins!";
        } else {
            document.getElementById("result").textContent = "You win!";
        }
    }
    else if(computerChoice === "scissors"){
        if(playerChoice === "paper"){
            document.getElementById("result").textContent = "Computer chose scissors, computer wins!"
        } else {
            document.getElementById("result").textContent = "You win!"
        }
    }
}

