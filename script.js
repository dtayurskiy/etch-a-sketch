const main = document.getElementById('grid-container');

function createGrid(sizeOfGrid) {
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

createGrid(16);