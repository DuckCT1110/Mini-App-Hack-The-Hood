// Grab all elements at once
const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const cancelButton = document.getElementById("cancelBtn");
const timerDisplay = document.getElementById("timer");
const mascot = document.getElementById("mascot");
const messageEl = document.getElementById("message");
const hourSelect = document.getElementById("hourSelect");
const minuteSelect = document.getElementById("minuteSelect");
const timePicker = document.getElementById("timePicker");

// App state
let totalSeconds = 0;
let timerInterval = null;

// Build the hour/minute dropdown options
function buildSelectOptions(selectEl, max) {
  for (let i = 0; i <= max; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i.toString().padStart(2, "0"); // "00"
    selectEl.appendChild(option);
  }
}
buildSelectOptions(hourSelect, 5);
buildSelectOptions(minuteSelect, 59);

// Format helper
function formatTime(totalSecs) {
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  const pad = (n) => n.toString().padStart(2, "0");
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(totalSeconds);
}

// The state-switching function
function setUIState(state) {
  if (state === "idle") {
    // timePicker and startButton present with start button
    timePicker.classList.remove("hidden");
    startButton.classList.remove("hidden");
    pauseButton.classList.add("hidden");
    cancelButton.classList.add("hidden");
    messageEl.classList.add("hidden");
    mascot.textContent = "🧊";
    startButton.textContent = "Start";
  } else if (state === "running") {
    // pauseButton and cancelButton present
    timePicker.classList.add("hidden");
    startButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
    messageEl.classList.add("hidden");
    mascot.textContent = "😊";
    pauseButton.textContent = "Pause";
  } else if (state === "paused") {
    pauseButton.textContent = "Resume";
    mascot.textContent = "😴";
    // note: startBtn/timePicker stay hidden, cancel stays visible
    // only the pause button's label/behavior changes
  } else if (state === "finished") {
    // message and cancelButton(as new session) appear
    clearInterval(timerInterval);
    timerInterval = null;
    pauseButton.classList.add("hidden");
    cancelButton.classList.remove("hidden");
    cancelButton.textContent = "New Session"; // reuse cancel button to go back
    messageEl.classList.remove("hidden");
    messageEl.textContent = "Great work! 🎉";
    mascot.textContent = "🥳";
  }
}

// Reading the chosen time from the dropdowns
function getChosenSeconds() {
  const hours = parseInt(hourSelect.value, 10);
  const minutes = parseInt(minuteSelect.value, 10);
  return hours * 3600 + minutes * 60;
}

// Start button
startButton.onclick = function () {
  totalSeconds = getChosenSeconds();

  if (totalSeconds <= 0) {
    alert("Pick a time greater than 0 first!");
    return;
  }

  updateDisplay();
  setUIState("running");

  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      setUIState("finished");
    }
  }, 1000);
};

// Pause/Resume button
pauseButton.onclick = function () {
  if (timerInterval) {
    // currently running, now pause it
    clearInterval(timerInterval);
    timerInterval = null;
    setUIState("paused");
  } else {
    // currently paused, now resume it
    setUIState("running");
    timerInterval = setInterval(function () {
      totalSeconds--;
      updateDisplay();
      if (totalSeconds <= 0) {
        setUIState("finished");
      }
    }, 1000);
  }
};

// Cancel button
cancelButton.onclick = function () {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  updateDisplay();
  setUIState("idle");
};

// Start the app in idle state
setUIState("idle");
