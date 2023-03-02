"use strict";

let getComputerChoice = function () {
  let choices = ["Rock", "Paper", "Scisors"];
  let random = Math.trunc(Math.random() * 3);

  for (const n in choices) {
    console.log(`Computer guess: ${choices[random]}`);
  }
  return `${choices[random]}`;
};

let userChoice = function (choice) {
  let lower = choice.toLowerCase();
  let fUpper = lower.slice(0, 1).toUpperCase();
  let result = `${fUpper}${lower.slice(1)}`;
  if (result !== "Rock" && result !== "Paper" && result !== "Scisors") {
    console.log(`Invalid`);
  } else return result;
};
let computerScore = 0;
let playerScore = 0;

let playround = function (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`Draw`);
    // computerScore = playerScore;
  } else if (playerSelection == "Rock" && computerSelection == "Scisors") {
    console.log(
      `Player has won: ${playerSelection} defeats ${computerSelection}`
    );
    playerScore = ++playerScore;
  } else if (playerSelection == "Scisors" && computerSelection == "Paper") {
    console.log(
      `Player has won: ${playerSelection} defeats ${computerSelection}`
    );
    playerScore = ++playerScore;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log(
      `Player has won: ${playerSelection} defeats ${computerSelection}`
    );
    playerScore = ++playerScore;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    console.log(
      `Computer has won: ${computerSelection} defeats ${playerSelection}`
    );
    computerScore = ++computerScore;
  } else if (computerSelection == "Scisors" && playerSelection == "Paper") {
    console.log(
      `Computer has won: ${computerSelection} defeats ${playerSelection}`
    );
    computerScore = ++computerScore;
  } else if (computerSelection == "Rock" && playerSelection == "Scisors") {
    console.log(
      `Computer has won: ${computerSelection} defeats ${playerSelection}`
    );
    computerScore = ++computerScore;
  }
};

playround(userChoice(prompt("Enter your Choice")), getComputerChoice());

const game = function (n) {
  for (let i = 1; i <= 5; i++) {
    playround(userChoice(prompt("Enter your Choice")), getComputerChoice());
  }
  if (playerScore == computerScore) {
    console.log(`Its a tie at ${playerScore} 🥱`);
  } else if (playerScore > computerScore) {
    console.log(`Player has won with ${playerScore} points`);
  } else if (computerScore > playerScore) {
    console.log(`Computer has won with ${computerScore} points`);
  }
};

game(playround);
