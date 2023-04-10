let currentGridSize = 16; //default

createGrid(currentGridSize);

const resetButton = document.getElementById('reset');
const changeSizeButton = document.getElementById('changeSize');

resetButton.addEventListener('mousedown', function(e) {
    removeAllChildren('grid-container')
    createGrid(currentGridSize);
})

changeSizeButton.addEventListener('mousedown', function(e) {
    changeGridSize();
})

function createGrid(sizeOfGrid) {
    const main = document.getElementById('grid-container');
    const numOfSq = sizeOfGrid * sizeOfGrid;
    const size = 750 / sizeOfGrid;
    if (main.firstChild) {
        removeAllChildren('grid-container');
    }
    for (i = 0; i < numOfSq; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.height = size + 'px';
        div.style.width = size + 'px';
        main.appendChild(div);
    }
    addListenersToAllGridItems();
}

function makeBlack(e) {
    e.target.classList.add('black');
}

function removeAllChildren(elementId) {
    const parent = document.getElementById(elementId);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addListenersToAllGridItems() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(div => div.addEventListener('mouseover', function(e) {
    makeBlack(e);
    }))
}

function changeGridSize() {
    let gridSize = prompt('Enter the amount of squares you want going across. Maximum of 100',);
    gridSize = Number(gridSize);
    currentGridSize = gridSize;
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(currentGridSize);
    }
    else {
        alert('Invalid selection');
    }
}