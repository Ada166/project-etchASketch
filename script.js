const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        newSize = prompt("Enter new grid size (max 100):");        if (newSize === null) return;
        let size= parseInt (newSize);
    });

const container = document.querySelector('.container');
function createGrid(numSquare) {
    for (let i = 0; i < numSquare; i++) {
        const square = document.createElement('div'); 
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'orange';
})
    }
}



createGrid(resetBtn);