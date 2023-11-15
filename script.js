const grid = document.querySelector('.grid');
const box = document.querySelectorAll('.box');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        function changeColor() {
            box.style.background = 'cyan';
        }
        box.addEventListener('mouseenter', changeColor);
        row.appendChild(box);
    }
    grid.appendChild(row);
    
}


