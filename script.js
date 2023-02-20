// List of constant values
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

// List of variables
let currentColor = DEFAULT_COLOR;

// Create a grid of squares on the canvas
const canvas = document.querySelector('.canvas');
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
        e.target.style.backgroundColor = currentColor;
    }
});

// Reset the canvas when the reset button is clicked
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
});

// Update the current color when the color picker is changed
const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('change', () => {
    currentColor = colorPicker.value;
});

// Toggle the grid lines when the grid button is clicked
const gridButton = document.querySelector('#gridButton');
gridButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.toggle('border');
    });
});

createGrid(DEFAULT_SIZE);
