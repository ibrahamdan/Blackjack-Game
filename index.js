import { Card } from './card.js'



document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('draw-btn').addEventListener('click', drawCard);

let suits = ["Spades", "Diamonds", "Clubs", "Hearts"]
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

/*let deck = []

for (let i = 0; i < suits.length; i++) {
    for (let k = 0; k < values.length; k++) {
        const card = new Card(suits[i], values[k])
        deck.push(card)
    }
}*/

let deck = []

function buildDeck() {
    let deck = []

    for (let i = 0; i < suits.length; i++) {
        for (let k = 0; k < values.length; k++) {
            const card = new Card(suits[i], values[k])
            deck.push(card)
        }
    }
    return deck
}

let sum = 0
let message = ""
let gotBJ = false
let isAlive = true
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let startBtn = document.querySelector("#start-btn")
let firstRound = true

function getRandomCard() {
    let cardPos = Math.floor(Math.random() * deck.length) + 1
    let randomCard = deck[cardPos]
    deck.splice(deck.indexOf(randomCard), 1)
    return randomCard.value
}

function displaySum() {
    sumEl.innerHTML = "Sum: " + sum
}

function calculateSum() {
    sum = 0
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] == "J" || cards[i] == "Q" || cards[i] == "K" ) {
            sum = sum + 10
        }
        else if (cards[i] == "A") {
            let tempSum = sum
            tempSum = tempSum + 11
            if (tempSum > 21) {
                sum = sum + 1
            }
            else {
                sum = tempSum
            }
        }
        else {
            sum = sum + cards[i]
        }
    }
    displaySum()
    updateMessage()
    return sum
}

function displayCards() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML = cardsEl.innerHTML + cards[i] + " "
    }
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
    deck = buildDeck()
    startBtn.innerHTML = "New Game"
    cards = [getRandomCard(), getRandomCard()]
    sum = calculateSum()
    displayCards()
    if (!firstRound) {
        buildNewGame()
    }
    firstRound = false
}

function drawCard() {
    if (isAlive) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum = calculateSum()
        cardsEl.innerHTML = cardsEl.innerHTML + newCard + " "
    }
}

function buildNewGame() {
    deck = buildDeck()
    startBtn.innerHTML = "New Game"
    cards = [getRandomCard(), getRandomCard()]
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

