let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let startBtn = document.querySelector("#start-btn")
let firstRound = true

function displaySum() {
    sumEl.innerHTML = "Sum: " + sum
}

function calculateSum() {
    sum = 0
    for (let i = 0; i < cards.length; i++) {
        sum = sum + cards[i]
    }
    displaySum()
    updateMessage()
    return sum
}

function displayCards() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML = cardsEl.innerHTML + cards[i] + " "
        console.log("stuck")
    }
    console.log("displayed cards")
}

function updateMessage() {
    if (sum <= 20) {
        message = "draw another card?"
    }
    else if (sum === 21) {
        message = "wow nigga"
        gotBJ = true
        isAlive = false
    }
    else {
        message = "fuck off nigga"
        isAlive = false
    }
    messageEl.innerHTML = message
}

function startGame() {
    startBtn.innerHTML = "New Game"
    cards = [10, 2]
    let sum = 0
    let message = ""
    let gotBJ = false
    let isAlive = true
    sum = calculateSum()
    displayCards()
    if (!firstRound) {
        buildNewGame()
    }
    firstRound = false
}

function drawCard() {
    if (isAlive) {
        let newCard = Math.floor(Math.random() * 10) + 1
        cards.push(newCard)
        sum = calculateSum()
        cardsEl.innerHTML = cardsEl.innerHTML + newCard + " "
    }
}

function buildNewGame() {
    startBtn.innerHTML = "New Game"
    cards = [10, 2]
    sum = 0
    message = ""
    gotBJ = false
    isAlive = true
    messageEl.innerHTML = "draw another card?"
    cardsEl.innerHTML = "Cards: "
    sumEl.innerHTML = "Sum: "
    sum = calculateSum()
    displayCards()
}

