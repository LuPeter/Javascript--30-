const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(e){
    if(!isDrawing) return;
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedrown', () =>isDrawing = true );
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);