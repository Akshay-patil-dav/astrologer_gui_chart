let drawingModeActive = false;
let isCurrentlyDrawing = false;
let selectedColor = 'black';
let previousX = 0;
let previousY = 0;
const canvasElement = document.getElementById('drawingArea');
const canvasContext = canvasElement.getContext('2d');

function adjustCanvasSize() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight * 0.8;
}

window.addEventListener('resize', adjustCanvasSize);
adjustCanvasSize();

canvasElement.addEventListener('dblclick', (event) => {
    if (drawingModeActive) {
        isCurrentlyDrawing = true;
        document.body.style.cursor = 'crosshair';
        previousX = event.clientX - canvasElement.offsetLeft;
        previousY = event.clientY - canvasElement.offsetTop;
    }
});

canvasElement.addEventListener('mouseup', () => {
    if (drawingModeActive) {
        isCurrentlyDrawing = false;
        document.body.style.cursor = 'default';
    }
});

canvasElement.addEventListener('mousemove', (event) => {
    if (isCurrentlyDrawing) {
        const currentX = event.clientX - canvasElement.offsetLeft;
        const currentY = event.clientY - canvasElement.offsetTop;

        canvasContext.beginPath();
        canvasContext.moveTo(previousX, previousY);
        canvasContext.lineTo(currentX, currentY);

        canvasContext.strokeStyle = selectedColor;
        canvasContext.lineWidth = 2;
        canvasContext.lineCap = 'round';
        canvasContext.stroke();

        previousX = currentX;
        previousY = currentY;
    }
});

document.getElementById('colorPicker').addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

document.getElementById('startDrawing').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('drawingArea').style.zIndex = '30';
        drawingModeActive = true;
        document.body.style.cursor = 'default';
    } else {
        document.getElementById('drawingArea').style.zIndex = '1';
        drawingModeActive = false;
        isCurrentlyDrawing = false;
        document.body.style.cursor = 'default';
    }
});

document.getElementById('eraseDrawing').addEventListener('click', () => {
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
});

document.getElementById('remove').addEventListener('click', () => {
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

   
        arrows = [];
        arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
    
    
});
