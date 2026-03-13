const container = document.querySelector('#grid-container');
const controls = document.querySelector('#controls');

function createGrid(size) {
    container.textContent = '';

    const totalSquares = size * size;
    const squareSize = 100 / size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');

        square.style.flex = `0 0 ${squareSize}%`;
        square.style.height = `${squareSize}%`;

        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

controls.addEventListener('submit', function(event) {
    event.preventDefault();
    const size = parseInt(document.querySelector('#grid-size').value);
    createGrid(size);
});

controls.addEventListener('click', function(event) {
    if (event.target.id === 'reset') {
        const gridItems = container.querySelectorAll('.grid-item');
        gridItems.forEach(item => item.style.backgroundColor = '');
    }
});

container.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('grid-item') && event.buttons === 1) {
        event.target.style.backgroundColor = getRandomColor();
    }
});

container.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = getRandomColor();
    }
});

container.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('grid-item')) {
        event.preventDefault();
    }
});

createGrid(68);

