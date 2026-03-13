const container = document.querySelector('#container');
const form = document.querySelector('#grid-size-form');

function createGrid(size) {
    container.textContent = '';

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');

        const squareSize = `${100 / size}%`;
        square.style.width = squareSize;
        square.style.height = squareSize;

        container.appendChild(square);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const size = parseInt(document.querySelector('#grid-size').value);
    createGrid(size);
});
container.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('grid-item') && event.buttons === 1) {
        event.target.classList.add('colored');
    }
});
container.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('grid-item')) {
        event.preventDefault();
    }
})
