// Grab all elements at once
const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const timer = document.getElementById("timer");
const mascot = document.getElementById("mascot");
const cancelButton = document.getElementById("cancelBtn");
const messageEl = document.getElementById("message");
const hourSelect = document.getElementById("hourSelect");
const minuteSelect = document.getElementById("minuteSelect");
const timePicker = document.getElementById("timePicker");


// App state
let seconds = 0;
let timerInterval = null;

function updateTimer() {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  timer.textContent = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Activate start button
startButton.onclick = function () {
    mascot.textContent = "😊";
    timerInterval = setInterval(function () {
    seconds--;
    updateTimer();
},1000);
};

pauseButton.onclick = function () {
  clearInterval(timerInterval);
  mascot.textContent = "😢";
};
