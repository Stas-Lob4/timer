let timerInterval
let timerRunning = false
let seconds = 0
let minutes = 0
let hours = 0

function updateTimerDisplay() {
	document.getElementById('timer').textContent = `${hours
		.toString()
		.padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`
}

function saveTime() {
	localStorage.setItem('hours', hours)
	localStorage.setItem('minutes', minutes)
	localStorage.setItem('seconds', seconds)
}

function loadTime() {
	hours = parseInt(localStorage.getItem('hours')) || 0
	minutes = parseInt(localStorage.getItem('minutes')) || 0
	seconds = parseInt(localStorage.getItem('seconds')) || 0
	updateTimerDisplay()
}

function startTimer() {
	if (timerRunning) {
		clearInterval(timerInterval)
		document.getElementById('button').innerHTML = 'Start'
	} else {
		timerInterval = setInterval(updateTimer, 1000)
		document.getElementById('button').innerHTML = 'Stop'
	}
	timerRunning = !timerRunning
}

function updateTimer() {
	seconds++
	if (seconds === 60) {
		seconds = 0
		minutes++
		if (minutes === 60) {
			minutes = 0
			hours++
		}
	}
	updateTimerDisplay()
}

document.getElementById('button').addEventListener('click', startTimer)

loadTime()
