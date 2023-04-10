
createGrid(16);
let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(div => div.addEventListener('mousedown', function(e) {
    makeBlack(e);
}))

function createGrid(sizeOfGrid) {
    const main = document.getElementById('grid-container');
    const numOfSq = sizeOfGrid * sizeOfGrid;
    const size = 500 / sizeOfGrid;
    for (i = 0; i < numOfSq; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.height = size + 'px';
        div.style.width = size + 'px';
        main.appendChild(div);
    }
}

function makeBlack(e) {
    e.target.classList.add('black');
}


