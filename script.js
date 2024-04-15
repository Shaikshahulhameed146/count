const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let intervalId;
let seconds = 60; // Starting from 1 minute (60 seconds)

function startTimer() {
  intervalId = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(intervalId);
      timer.textContent = '00:01:00';
      startBtn.disabled = false;
      stopBtn.disabled = true;
      return;
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 60; // Reset to 1 minute
  timer.textContent = '00:01:00';
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
