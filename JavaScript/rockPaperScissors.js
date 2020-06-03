const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
        return userInput;
    }else{
        return "Error:Wrong Input";
    }
};

function getComputerChoice(){
    var randNum = Math.floor(Math.random()*3);
    switch(randNum){
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break
        case 2:
            return 'scissors'
            break
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "Game is tie";
    }

    if(userChoice = 'rock'){
        if(computerChoice = 'paper'){
            return "Computer won the Game";
        }else{
            return "User won the Game";
        }
    }

    if(userChoice = 'paper'){
        if(computerChoice = 'scissors'){
            return "Computer won the Game";
        }else{
            return "User won the Game";
        }
    }

    if(userChoice = 'scissors'){
        if(computerChoice = 'rock'){
            return "Computer won the Game";
        }else{
            return "User won the Game";
        }
    }
}

function playGame(){
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice();
    console.log("userChoice = "+userChoice);
    console.log("computerChoice = "+computerChoice);

    console.log(determineWinner(userChoice, computerChoice));

}

playGame();
