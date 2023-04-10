let currentGridSize = 16; //defualt

createGrid(currentGridSize);

const resetButton = document.getElementById('reset');


resetButton.addEventListener('mousedown', function(e) {
    removeAllChildren('grid-container')
    createGrid(currentGridSize);
})

function createGrid(sizeOfGrid) {
    const main = document.getElementById('grid-container');
    const numOfSq = sizeOfGrid * sizeOfGrid;
    const size = 500 / sizeOfGrid;
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