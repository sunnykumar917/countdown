let initialTime = 600;
let timeRemaining = initialTime;
let displayTime = document.getElementById("displayTime");
let timer = null;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function countdown() {
    if (timeRemaining > 0) {
        timeRemaining--;
        displayTime.innerHTML = formatTime(timeRemaining);
    } else {
        clearInterval(timer);
        timer = null;
        displayTime.innerHTML = "00:00:00";
    }
}

function startCountdown() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(countdown, 1000);
}

function stopCountdown() {
    clearInterval(timer);
    timer = null;
}

function resetCountdown() {
    clearInterval(timer);
    timer = null;
    timeRemaining = initialTime;
    displayTime.innerHTML = formatTime(timeRemaining);
}

document.getElementById("startButton").addEventListener("click", startCountdown);
document.getElementById("stopButton").addEventListener("click", stopCountdown);
document.getElementById("resetButton").addEventListener("click", resetCountdown);
