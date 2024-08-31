let isDrawingEnabled = false;
let isDrawing = false;
let color = 'black';
let lastX = 0;
let lastY = 0;
const drawingArea = document.getElementById('drawingArea');
const ctx = drawingArea.getContext('2d');

function resizeCanvas() {
    drawingArea.width = window.innerWidth;
    drawingArea.height = window.innerHeight * 0.8;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

drawingArea.addEventListener('dblclick', (event) => {
    if (isDrawingEnabled) {
        isDrawing = true;
        document.body.style.cursor = 'crosshair';
        lastX = event.clientX - drawingArea.offsetLeft;
        lastY = event.clientY - drawingArea.offsetTop;
    }
});

drawingArea.addEventListener('mouseup', () => {
    if (isDrawingEnabled) {
        isDrawing = false;
        document.body.style.cursor = 'default';
    }
});

drawingArea.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const x = event.clientX - drawingArea.offsetLeft;
        const y = event.clientY - drawingArea.offsetTop;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();

        lastX = x;
        lastY = y;
    }
});

document.getElementById('startDrawing').addEventListener('click', () => {
    // alert("jskdfjm")
    document.getElementById('drawingArea').style.zIndex = '30';
    isDrawingEnabled = true;
    document.body.style.cursor = 'default';
});

document.getElementById('stopDrawing').addEventListener('click', () => {
    document.getElementById('drawingArea').style.zIndex = '4';

    isDrawingEnabled = false;
    isDrawing = false;
    document.body.style.cursor = 'default';
});

document.getElementById('eraseDrawing').addEventListener('click', () => {
    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
});

function setColor(selectedColor) {
    color = selectedColor;
}
