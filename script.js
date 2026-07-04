const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const timer = document.getElementById("timer");
const mascot = document.getElementById("mascot");


let seconds = 1500;
let timerInterval;

function updateTimer()
 {let minutes = Math.floor(seconds / 60);
 let remainingSeconds = seconds % 60;
 timer.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

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