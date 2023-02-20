// List of constant values
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

// List of variables
const canvas = document.querySelector('.canvas');

// Create a grid of squares on the canvas
function createGrid(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        canvas.appendChild(square);
    }
}

// Update the canvas size when the slider is released
const sizeSlider = document.querySelector('#sizeSlider');
sizeSlider.addEventListener('mouseup', () => {
    const size = sizeSlider.value;
    canvas.innerHTML = '';
    createGrid(size);
});

// Change the color of the squares while the mouse is pressed, stop when released
canvas.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
});
canvas.addEventListener('mousemove', (e) => {
    console.log(e);
    if (e.buttons === 1 && e.target.classList.contains('square')) {
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
});

createGrid(DEFAULT_SIZE);
