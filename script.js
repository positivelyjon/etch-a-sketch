const body = document.querySelector('body');
const box = document.querySelectorAll('.box');
const button = document.querySelector('button');

function gridMaker(n) {
    body.removeChild(document.querySelector('.grid'));
    const new_grid = document.createElement('div');
    new_grid.setAttribute('class', 'grid');
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < n; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            function changeColor() {
                box.style.background = 'cyan';
            }
            box.addEventListener('mouseenter', changeColor);
            row.appendChild(box);
        }
        new_grid.appendChild(row);    
    }
    body.appendChild(new_grid);
}

gridMaker(16);

function changeSize() {
    const side = prompt("How many boxes do you want on each side of the grid?");
    const pixelSize = Math.floor(960 / side);
    gridMaker(side);
    box.forEach(box => {
        box.width = pixelSize;
        box.style.height = pixelSize;
    })
}

button.addEventListener('click', changeSize);


