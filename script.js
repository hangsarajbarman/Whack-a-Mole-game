let score = 0;
let currentHole = null;
let gameInterval = null;

document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const scoreDisplay = document.getElementById('score');
    const startButton = document.getElementById('startButton');

    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        startButton.disabled = true;
        
        gameInterval = setInterval(() => {
            if (currentHole) {
                currentHole.querySelector('.mole').style.display = 'none';
            }
            const randomHoleIndex = Math.floor(Math.random() * holes.length);
            currentHole = holes[randomHoleIndex];
            currentHole.querySelector('.mole').style.display = 'block';
        }, 1000);
    }

    function whackMole() {
        score++;
        scoreDisplay.textContent = score;
        this.style.display = 'none';
    }

    holes.forEach(hole => {
        const mole = document.createElement('div');
        mole.classList.add('mole');
        mole.addEventListener('click', whackMole);
        hole.appendChild(mole);
    });

    startButton.addEventListener('click', startGame);
});
