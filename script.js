// Create a webpage with a default 16x16 grid of square divs as a canvas to sketch on
const canvas = document.querySelector('.canvas');

// Create a function that creates a grid of divs
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        canvas.appendChild(div);
    }
    // Set the width and height of the squares to fit the canvas
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.style.width = `${canvas.clientWidth / size}px`;
        square.style.height = `${canvas.clientHeight / size}px`;
    });
}

createGrid(16);
