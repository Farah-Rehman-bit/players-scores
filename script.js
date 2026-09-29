let scores = [0, 0];

let buttons = [
    document.getElementById("player1Btn"),
    document.getElementById("player2Btn")
];

let scoreDisplays = [
    document.getElementById("score1"),
    document.getElementById("score2")
];

let playerNames = [
    "PLAYER 1",
    "PLAYER 2"
];

let checkButton = document.getElementById("checkScore");
let result = document.getElementById("result");


for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function() {

        scores[i] = scores[i] + 1;

        scoreDisplays[i].textContent = scores[i];

    };

}


checkButton.onclick = function() {

    if (scores[0] > scores[1]) {

        result.textContent = playerNames[0] + " — YOU WON! 🏆";

    } 
    
    else if (scores[1] > scores[0]) {

        result.textContent = playerNames[1] + " — YOU WON! 🏆";

    } 
    
    else {

        result.textContent = "IT'S A DRAW! 🤝";

    }

};