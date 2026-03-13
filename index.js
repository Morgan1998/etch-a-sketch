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

controls.addEventListener('submit', function(event) {
    event.preventDefault();
    const size = parseInt(document.querySelector('#grid-size').value);
    createGrid(size);
});

controls.addEventListener('click', function(event) {
    if (event.target.id === 'reset') {
        const gridItems = container.querySelectorAll('.grid-item');
        gridItems.forEach(item => item.classList.remove('colored'));
    }
});

container.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('grid-item') && event.buttons === 1) {
        event.target.classList.add('colored');
    }
});

container.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.classList.add('colored');
    }
});

container.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('grid-item')) {
        event.preventDefault();
    }
});

createGrid(68);

