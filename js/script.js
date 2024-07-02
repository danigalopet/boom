
const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

let randomNumber;
let timer;

function startGame() {
  resetGame(); 
  randomNumber = Math.floor(Math.random() * 3) + 1;
  let timeLeft = 5;
  countdown.textContent = `Tiempo restante: ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft -= 1;
    countdown.textContent = `Tiempo restante: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      checkResult();
    }
  }, 1000);
}

function checkResult() {
  const userNumber = parseInt(userInput.value, 10);
  if (userNumber === randomNumber) {
    result.innerHTML = `<p class="green">¡Has salvado el mundo! Tu número: ${userNumber}, Número correcto: ${randomNumber}</p>`;
  } else {
    result.innerHTML = `<p class="red">La bomba ha estallado. Tu número: ${userNumber}, Número correcto: ${randomNumber}</p>`;
  }
}

function resetGame() {
  clearInterval(timer);
  userInput.value = '';
  countdown.textContent = '';
  result.innerHTML = '';
  randomNumber = null;
}

userInput.addEventListener('blur', startGame);
restartButton.addEventListener('click', resetGame);