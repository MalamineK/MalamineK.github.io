const quoteBtn = document.querySelector('#quoteBtn');
const dynamicText = document.getElementById('dynamic-text');
const cards = document.querySelectorAll('.card');
const nightBtn = document.querySelector('#nightBtn');

const quotes = [
    "If a moderate amount of physical exercise could be secured to every student daily... — William Stern",
    "If diseases take hold of particular parts of the body, there is nothing more sure to drive them out than diligent exercise... — Galen",
    "If we could give every individual the right amount of nourishment and exercise... — Hippocrates"
];

let index = 0;

function updateView() {
    index = (index + 1) % quotes.length;
    dynamicText.textContent = quotes[index];
}


if (nightBtn) {
    nightBtn.addEventListener('click', () => {
        const isOn = document.body.classList.toggle('night');
        nightBtn.setAttribute('aria-pressed', isOn);
        try { localStorage.setItem('nightMode', isOn ? '1' : '0'); } catch (e) { }
    });
}

if (quoteBtn) {
    quoteBtn.addEventListener('click', updateView);
}

if (localStorage.getItem('nightMode') === '1') {
    document.body.classList.add('night');
if (nightBtn) nightBtn.setAttribute('aria-pressed', true);
    }


const style = document.createElement('style');
style.textContent = `
.card.updated { transform: translateY(-8px) scale(1.01); transition: transform 0.25s; }
`;
document.head.appendChild(style);

window.__exerciseSite = { updateView };
