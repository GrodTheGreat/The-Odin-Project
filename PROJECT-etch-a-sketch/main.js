function createGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            container.appendChild(gridSquare);
        }
    }
}

createGrid();
const container = document.querySelector('.container');
container.addEventListener('mouseover', (event) => {
    const target = event.target;
    target.style.backgroundColor = 'lightgrey';
    // console.log('hovering');
})