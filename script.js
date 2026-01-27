const container = document.querySelector('.container');
function createGrid(numSquare) {
    for (let i = 0; i <numSquare; i++) {
        const square = document.createElement('div'); 
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange';
})
    }
}

createGrid(256);