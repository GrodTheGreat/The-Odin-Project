function setGridSize() {
    promptValue = prompt('Choose grid size', gridSize);
    if (isNaN(parseInt(promptValue))) {
        return; 
    }
    if (parseInt(promptValue) > 100) {
        console.log('Too big!');
        return
    }
    gridSize = parseInt(promptValue);
    createGrid(gridSize)
}

function createGrid(gridSize = 16) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.flexBasis = `${(1 / gridSize) * 100}%`;
            gridSquare.style.height = `${(1 / gridSize) * 100}vw`;
            container.appendChild(gridSquare);
        }
    }
}

function updateColor(target) {
    target.style.backgroundColor = `hsl(${target.colors.h}, 100%, ${target.colors.l}%)`;
}

let gridSize = 16;
createGrid(gridSize);
const container = document.querySelector('.container');
container.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (!(target.classList.contains('hovered'))) {
        target.classList.add('hovered');
        target.colors = {'h': Math.round(Math.random() * 359), 'l': 90};
        updateColor(target);
    } else if (target.colors.l >= 0) {
        target.colors.l -= 10;
        updateColor(target);
    }
})