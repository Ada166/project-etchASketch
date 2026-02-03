const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        let newSize = prompt("Enter new grid size (max 100):"); 
             
        if (newSize === null) return;
        let size = parseInt (newSize);
        if (isNaN(size) || size < 1 || size > 100) {
            alert("Invalid size. Please enter a number between 1 and 100.");
            return;
        }
        container.innerHTML = '';
        createGrid(size * size);
    });

    

const container = document.querySelector('.container');
function createGrid(numSquare) {
    let squaresPerSide = Math.sqrt(numSquare);
    let squareSize = 960 / squaresPerSide;
    for (let i = 0; i < numSquare; i++) {
        const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange';
})
    }
}



createGrid(256);