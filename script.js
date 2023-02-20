// Create a webpage with a default 16x16 grid of square divs as a canvas to sketch on
const canvas = document.querySelector('.canvas');

// Create a function that creates a grid of divs
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

createGrid(16);
