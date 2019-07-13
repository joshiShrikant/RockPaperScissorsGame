let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".results>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_button = document.getElementById("reset");


function getCompChoice() {
    const choice = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function converToString(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}



function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = converToString(user) + " beats to " + converToString(comp) + ". You win!!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('green-glow')
    }, 1500);
    if(userScore>4){
        alert("You Wins")
        compScore=0;
        userScore=0;
        userScore_span.innerHTML = 0;
        compScore_span.innerHTML = 0;
        result_p.innerHTML ="";
    }
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = converToString(user) + " loses to " + converToString(comp) + ". You lost!!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('red-glow')
    }, 1500);
    if(compScore>4){
        alert("You lost")
        compScore=0;
        userScore=0;
        userScore_span.innerHTML = 0;
        compScore_span.innerHTML = 0;
        result_p.innerHTML ="";
    }
}

function drow(user, comp) {
    result_p.innerHTML = converToString(user) + " is equal to  " + converToString(comp) + ". Match drow!!";
    document.getElementById(user).classList.add('yellow-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('yellow-glow')
    }, 1500);
}

function game(userChoice) {
    const CompChoice = getCompChoice();
    switch (userChoice + CompChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, CompChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, CompChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            drow(userChoice, CompChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
        console.log("R");
    })
    paper_div.addEventListener('click', function () {
        game("p");
        console.log("P");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
        console.log("S");
    })
    reset_button.addEventListener('click', function () {
        userScore = 0;
        compScore = 0;
        compScore_span.innerHTML = compScore;
        userScore_span.innerHTML = userScore;
    })
}

main();