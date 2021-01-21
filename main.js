// setting up drawing cavas with default values
const canvas = document.querySelector('.canvas');
canvas.classList.add('grid-16x16');

let drawingCells = [];
let color = "black";
let randomColor = false;
let grayScale = false;

function setCanavas(cells = 16){
    
    for (let i = 0; i < cells * cells; i++){
        drawingCells.push(document.createElement('div'));
        drawingCells[i].addEventListener('mouseenter', setPixelColorOnHover, false);

        canvas.appendChild(drawingCells[i]);
    }
}

function setPixelColorOnHover(){
    if (randomColor){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let opacity = 1;

        color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
    if (grayScale){
        let currentOpacity = Number(this.style.backgroundColor.slice(-4,-1));
        if (currentOpacity < 1)
            color = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        else
            color = `rgba(0, 0, 0, 0.1)`; 
    }

    for (cell of drawingCells){
        cell.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = color;
        }, false);
    }
}

setCanavas();

function resetColors(){
    randomColor = false;
    grayScale = false;
}

// #rrggbb
function hexToRgba(hex){
    let red = parseInt(hex.slice(1, 3), 16);
    let green = parseInt(hex.slice(3,5), 16);
    let blue = parseInt(hex.slice(5), 16);

    console.log(hex);

    return `rgba(${red}, ${green}, ${blue}, 1)`;
}


// buttom set up
const clearBtn = document.querySelector('#clr-btn');
clearBtn.addEventListener('click', () => {
    for (cell of drawingCells){
        cell.style.backgroundColor = 'transparent';
    }
});

const blackBtn = document.querySelector('#black-btn');
blackBtn.addEventListener('click', () => {resetColors(); color = 'rgba(0,0,0,1)'});

const eraserBtn = document.querySelector('#eraser-btn');
eraserBtn.addEventListener('click', () => {resetColors(); color = 'rgba(52, 52, 52, 0)'});

const rainbowBtn = document.querySelector('#rainbow-btn');
rainbowBtn.addEventListener('click', () => {resetColors(); randomColor = true});

const grayScaleBtn = document.querySelector('#gray-scale-btn');
grayScaleBtn.addEventListener('click', () => {resetColors(); grayScale = true});

const colorMenu = document.querySelector('#color-menu');
colorMenu.addEventListener('change', (e) => {resetColors(); color = hexToRgba(e.target.value); console.log(color)});
colorMenu.addEventListener('input', (e) => {resetColors(); color = hexToRgba(e.target.value); console.log(color)});


