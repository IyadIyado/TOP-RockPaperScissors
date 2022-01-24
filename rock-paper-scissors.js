let computerPlay = () => {
	let options = ["rock", "paper", "scissors"];

	return options[Math.floor(Math.random() * options.length)];
};

let playerSelection = () => {
	let input = prompt(
		"Please make choice between rock, paper or scissors!"
	).toLowerCase();
	return input;
};

let computerScore = 0;
let playerScore = 0;

let playRound = (player, computer) => {
	let result = `You both selected ${player}!`;

	if (computer == "rock") {
		if (player == "paper") {
			result = `You win! ${player} beats ${computer}.`;
			playerScore++;
		} else if (player == "scissors") {
			result = `You lose! ${computer} beats ${player}.`;
			computerScore++;
		}
	} else if (computer == "paper") {
		if (player == "scissors") {
			result = `You win! ${player} beats ${computer}.`;
			playerScore++;
		} else if (player == "rock") {
			result = `You lose! ${computer} beats ${player}.`;
			computerScore++;
		}
	} else if (computer == "scissors") {
		if (player == "rock") {
			result = `You win! ${player} beats ${computer}.`;
			playerScore++;
		} else if (player == "paper") {
			result = `You lose! ${computer} beats ${player}.`;
			computerScore++;
		}
	}

	return result;
};

let game = () => {
	while (computerScore != 5 && playerScore != 5) {
		playRound(playerSelection(), computerPlay());

		console.log(computerScore);
		console.log(playerScore);

		if (computerScore == 5) {
			console.log("The computer is the winner");
		} else if (playerScore == 5) {
			console.log("Congratulations, you win!");
		}
	}
};

game();
