function toggleCard(cardElement) {
    cardElement.classList.toggle('eliminated');
}

let scores = {
    wins: 0,
    losses: 0
};

function updateScore(type) {
    scores[type]++;
    document.getElementById(type).innerText = scores[type];
}

function resetBoard() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('eliminated');
    });
}