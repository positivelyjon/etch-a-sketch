const grid = document.querySelector('.grid');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        row.appendChild(box);
    }
    grid.appendChild(row);
    
}