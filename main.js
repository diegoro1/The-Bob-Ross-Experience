// setting up drawing cavas with default values
const canvas = document.querySelector('.canvas');
canvas.classList.add('grid-16x16');

let drawingCells = [];

function setCanavas(cells = 16, color = "black"){
    
    for (let i = 0; i < cells * cells; i++){
        drawingCells.push(document.createElement('div'));
        drawingCells[i].addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = color;
        }, false);

        canvas.appendChild(drawingCells[i]);
    }
}

setCanavas();


// buttom set up
// let eraseButton = 
