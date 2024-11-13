const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesBar = document.getElementById('yesBar');
const noBar = document.getElementById('noBar');
const feedbackModal = document.getElementById('feedbackModal');
const feedbackMessage = document.getElementById('feedbackMessage');
const closeModal = document.getElementById('closeModal');

let yesPercentage = 50;
let noPercentage = 50;
let noButtonClicks = 0;

// Responses for dynamic feedback
const responses = [
    "Well, at least you're honest!",
    "Embrace the truth!",
    "Honesty is the best policy!",
    "Looks like you admit it!",
    "No shame in self-awareness!"
];

function updateChart() {
    yesBar.style.width = `${yesPercentage}%`;
    noBar.style.width = `${noPercentage}%`;
}

// Move "No" button randomly on hover
noButton.addEventListener('mouseenter', () => {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 300 + 50}px`;
    noButton.style.left = `${Math.random() * 300 + 50}px`;

    // Increase "Yes" bar, decrease "No" bar
    yesPercentage = Math.min(100, yesPercentage + 5);
    noPercentage = Math.max(0, noPercentage - 5);
    updateChart();
});

// Dynamic response for clicking "Yes" button
yesButton.addEventListener('click', () => {
    feedbackMessage.textContent = responses[noButtonClicks % responses.length];
    feedbackModal.style.display = 'flex';
});

// Close modal on clicking close button
closeModal.addEventListener('click', () => {
    feedbackModal.style.display = 'none';
});

// Ensure modal closes on clicking outside content
window.addEventListener('click', (event) => {
    if (event.target === feedbackModal) {
        feedbackModal.style.display = 'none';
    }
});

// Update chart on load
updateChart();
