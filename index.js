const container = document.querySelector('#container');

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

createGrid(128);

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