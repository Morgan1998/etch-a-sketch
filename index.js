const container = document.querySelector('#container');

function createGrid(size) {
    container.textContent = '';

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
    }
}