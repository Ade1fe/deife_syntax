// Create an empty game board
let board = ["", "", "", "", "", "", "", "", ""];

// Current player
let currentPlayer = "X";

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Scores for X and O
let xScore = 0;
let oScore = 0;
let xCoins = 0;
let oCoins = 0;
let draws = 0;

let level = 1;

// Render the game board and scores
function renderBoard() {
  const boardElement = document.querySelector(".board");
  boardElement.innerHTML = "";

  for (let i = 0; i < board.length; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.innerText = board[i];
    cell.addEventListener("click", handleCellClick);
    boardElement.appendChild(cell);
  }

  document.getElementById("x-score").textContent = `X: ${xScore}`;
  document.getElementById("o-score").textContent = `O: ${oScore}`;
  document.getElementById("level").textContent = `Level: ${level}`;
  document.getElementById("draw").textContent = `Draw: ${draws}`;

  document.getElementById("x-coin").textContent = `X - ${xCoins} 💰`;
  document.getElementById("o-coin").textContent = `O - ${oCoins} 💰`;
}

// Check for a win
function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      if (board[a] === "X") {
        xScore++;
        xCoins += 12;
        level++;
        return true;
      } else if (board[a] === "O") {
        oScore++;
        oCoins += 12;
        level++;
        return true;
      }
    }
  }
  return false;
}

// Handle cell click event
function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;

  // Check if the cell is already occupied
  if (board[cellIndex] !== "" || currentPlayer === "O") {
    return;
  }

  // Update the board with the current player
  board[cellIndex] = currentPlayer;

  // Check for a win or a draw
  if (checkWin()) {
    let winner;
    if (currentPlayer === "O") {
      winner = "Player O";
    } else {
      winner = "Player X";
    }
    setTimeout(function () {
      displayModal(`${winner} wins!`);
    }, 1000);
  } else if (checkDraw()) {
    setTimeout(function () {
      displayModal("It's a draw!");
    }, 1000);
  } else {
    // Switch to the next player
    currentPlayer = "O";
    setTimeout(makeComputerMove, 500);
  }

  // Re-render the game board
  renderBoard();
}

// Display the modal with the specified message
function displayModal(message) {
  const modal = document.getElementById("winner-modal");
  const winnerMessage = document.getElementById("winner-message");
  winnerMessage.textContent = message;
  modal.style.display = "block";
}

// Get the modal and close button elements
const modal = document.getElementById('winner-modal');
const closeButton = document.getElementById('close');

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  resetGame();
}

// Event listener for clicking outside the modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Event listener for clicking the close button
closeButton.addEventListener('click', closeModal);

// Check for a draw
function checkDraw() {
  if (!checkWin() && !board.includes("")) {
    level++;
    draws++;
    return true;
  }
  return false;
}

// Reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  renderBoard();
}

// Make the computer's move
function makeComputerMove() {
  // Find an available empty cell to place the computer's move
  const availableCells = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      availableCells.push(i);
    }
  }

  // Choose a random available cell
  const randomIndex = Math.floor(Math.random() * availableCells.length);
  const selectedCell = availableCells[randomIndex];

  // Update the board with the computer's move
  board[selectedCell] = currentPlayer;

  // Re-render the game board
  renderBoard();

  // Check for a win or a draw
  if (checkWin()) {
    let winner;
    if (currentPlayer === "O") {
      winner = "Player O";
    } else {
      winner = "Player X";
    }
    setTimeout(function () {
      displayModal(`${winner} wins!`);
    }, 1000);
    return;
  } else if (checkDraw()) {
    setTimeout(resetGame, 1000);
    return;
  }

  // Switch to the player's turn
  currentPlayer = "X";
}

// Event listener for clicking outside the modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Event listener for clicking the close button
closeButton.addEventListener("click", closeModal);

// Initial render
renderBoard();
