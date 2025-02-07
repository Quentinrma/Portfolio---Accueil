const cards = [
  "🌿",
  "🛠️",
  "✒️",
  "🏠",
  "🌿",
  "🛠️",
  "✒️",
  "🏠",
  "❗",
  "🌟",
  "💼",
  "⚙️",
  "❗",
  "🌟",
  "💼",
  "⚙️",
];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  const gameBoard = document.getElementById("gameBoard");
  shuffle(cards);
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.card = card;
    cardElement.innerText = "?";
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");
  this.innerText = this.dataset.card;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard.innerText = "?";
    secondCard.innerText = "?";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

createBoard();
