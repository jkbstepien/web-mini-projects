let saveElement = document.getElementById("result-field")
let countElement = document.getElementById("clicks-counter")
let recordElement = document.getElementById("record-field")
let counter = 0
let record = 0

function increaseCookieCounter() {
    counter += 1
    countElement.textContent = counter
    if (counter > record) {
        record = counter
        recordElement.textContent = "Record: " + record
    }
}

function saveCounter() {
    saveElement.textContent = "Previous result:"
    saveElement.textContent += " " + counter
    countElement.textContent = "0"
    counter = 0;
}