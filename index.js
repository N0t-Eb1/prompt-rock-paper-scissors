function playGame() {
    function getHumanChoice(roundCounter) {
        let humanChoice = prompt(`Round ${roundCounter}\n`
            + "Choose your hand\n\n"
            + "Rock: 1\n"
            + "Paper: 2\n"
            + "Scissors: 3\n"
        );

        while((humanChoice === null) || (humanChoice === "") || ((humanChoice.trim() !== "1") && (humanChoice.trim() !== "2") && (humanChoice.trim() !== "3"))) {
            if(humanChoice === null) {
                return null;
            } else {
                alert("Please enter a valid value (1, 2 or 3)");
                humanChoice = prompt(`Round ${roundCounter}\n`
                    + "Choose your hand\n\n"
                    + "Rock: 1\n"
                    + "Paper: 2\n"
                    + "Scissors: 3\n"
                );
            }
        }

        return checkHand(Number(humanChoice));
    }

    function getComputerChoice() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        return checkHand(randomNum);
    }

    function checkHand(handNum) {
        switch(handNum) {
            case 1:
                return "Rock";
            case 2:
                return "Paper";
            case 3:
                return "Scissors";
        }
    }

    function checkWinner(human, computer) {
        switch (human) {
            case "Rock":
                if(computer === "Paper")
                    return "Computer";
                else
                    return "You";

            case "Paper":
                if(computer === "Rock")
                    return "You";
                else
                    return "Computer";
                
            case "Scissors":
                if(computer === "Rock")
                    return "Computer";
                else
                    return "You";
        }
    }

    function playRound(human, computer) {
        let winner = checkWinner(human, computer);
        
        if(human === computer) {
            alert(`You: ${human}\n`
            + `Computer: ${computer}\n\n`
            + `That's a tie!`);
        } else if(winner === "You") {
            alert(`You: ${human}\n`
            + `Computer: ${computer}\n\n`
            + `${winner} won!`);
            humanScore++;
        } else {
            alert(`You: ${human}\n`
            + `Computer: ${computer}\n\n`
            + `${winner} won!`);
            computerScore++;
        }
    }

    alert("Welcom to our Rock-Paper-Scissors game!\n\n"
        + "You will play 5 rounds agains the copmuter\n"
    );

    let exitCode = 0;
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <=5; i++) {
        const humanChoice = getHumanChoice(i);
        if(humanChoice === null) {
            exitCode++;
            break;
        }
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(exitCode === 1) {
        alert("You cancelled the game\n\n"
            + "Refresh the page to start a new game"
        );
        return;
    }

    if(humanScore === computerScore) {
        alert(`Final scores:\n\n`
            + `You = ${humanScore}\n`
            + `Computer = ${computerScore}\n\n`
            + `It's a draw!\n\n\n`
            +`Refresh the page to start a new game`
        );
    } else if(humanScore > computerScore) {
        alert(`Final scores:\n\n`
            + `You = ${humanScore}\n`
            + `Computer = ${computerScore}\n\n`
            + `You won the game!\n\n\n`
            +`Refresh the page to start a new game`
        );
    } else {
        alert(`Final scores:\n\n`
            + `You = ${humanScore}\n`
            + `Computer = ${computerScore}\n\n`
            + `Computer won the game!\n\n\n`
            +`Refresh the page to start a new game`
        );
    }
}

playGame();