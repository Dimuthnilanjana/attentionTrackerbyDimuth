let totalSeconds = 0;
let timerInterval;
let restMode = false;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById('startBtn').disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = 0;
  restMode = false;
  updateDisplay();
  document.getElementById('startBtn').disabled = false;
}

function updateTimer() {
  totalSeconds++;

  if (totalSeconds % (1 * 60) === 0) {
    restMode = !restMode;
    playBeep();
  }

  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const timerElement = document.getElementById('timer');
  const totalWorkTimeElement = document.getElementById('totalWorkTime');

  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  totalWorkTimeElement.textContent = `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`;

  if (restMode) {
    timerElement.classList.add('rest-mode');
  } else {
    timerElement.classList.remove('rest-mode');
  }
}

function playBeep() {
  const audio = new Audio('beep.mp3'); // Provide the path to your beep sound file
  audio.play();
}
