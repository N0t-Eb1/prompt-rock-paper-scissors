const humanButtons = document.querySelectorAll(".human-buttons .button");
humanButtons.forEach((button) => {
    button.addEventListener("click", clickHumanButton);
});

const placeHolder = document.querySelector("#plc");
placeHolder.classList.toggle("human-buttons");
const computerPlaceHolder = document.querySelector(".computer");
computerPlaceHolder.classList.toggle("human-buttons");
const gameBackground = document.querySelector(".game-area");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

function clickHumanButton(e) {
    switch (e.target.classList[1]) {
        case "rock":
            placeHolder.textContent = "🪨";
            break;
        case "paper":
            placeHolder.textContent = "📄";
            break;
        case "scissors":
            placeHolder.textContent = "✂️";
            break;
    }
    playRound();
}

function playRound() {
    const computerHand = getCumputerHand();
    computerPlaceHolder.textContent = computerHand;
    const winner = getWinner();
    if (placeHolder.textContent === computerHand) {
        gameBackground.style.backgroundColor = "#242424";
        return;
    } else if (winner === "human") {
        gameBackground.style.backgroundColor = "#023020";
        humanScore.textContent = Number(humanScore.textContent) + 1;
    } else {
        gameBackground.style.backgroundColor = "#800000";
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
}

function getCumputerHand() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "🪨";
        case 2:
            return "📄";
        case 3:
            return "✂️";
    }
}

function getWinner() {
    switch (placeHolder.textContent) {
        case "🪨":
            if (computerPlaceHolder.textContent === "✂️") return "human";
            else return "computer";
        case "📄":
            if (computerPlaceHolder.textContent === "🪨") return "human";
            else return "computer";
        case "✂️":
            if (computerPlaceHolder.textContent === "📄") return "human";
            else return "computer";
    }
}
