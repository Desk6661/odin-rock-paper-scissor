let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let items = ["rock", "paper", "scissor"];
    let randomNum = Math.floor((Math.random() * 3));
    return items[randomNum];
}

function getHumanChoice(){
    return prompt("enter rock, paper or scissor", "");
}

function playRound(humanChoice,computerChoice){
    humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("computer lose!, human wins!");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("computer lose!, human wins!");
        humanScore++;
    } else if(humanChoice === "scissor" && computerChoice === "paper"){
        console.log("computer lose!, human wins!");
        humanScore++;
    } else if(humanChoice === computerChoice){
        console.log("tie! no one wins!");
    } else {
        console.log("humans lose! computer wins!");
        computerScore++;
    }
}

function playGame(){
    let exit = 100;

    for(let i = 0; i < exit; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log("human choice :", humanChoice);
        console.log("computer choice :", computerChoice);

        playRound(humanChoice, computerChoice);

        if (humanScore === 5) {
            exit = 0;
            return console.log("human wins the competition with 5 points"); 
        } else if (computerScore === 5){
            exit = 0;
            return console.log("computer wins the competition with 5 points"); 
        }
    }
}

playGame();