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

// Mouse down to start drawing
canvasElement.addEventListener('mousedown', (event) => {
    if (drawingModeActive) {
        isCurrentlyDrawing = true;
        document.body.style.cursor = 'pointer';
        previousX = event.clientX - canvasElement.offsetLeft;
        previousY = event.clientY - canvasElement.offsetTop;
    }
});

// Mouse up to stop drawing
canvasElement.addEventListener('mouseup', () => {
    if (drawingModeActive) {
        isCurrentlyDrawing = false;
        document.body.style.cursor = 'default';
    }
});

// Mouse move to draw on canvas
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
        document.getElementById('drawingArea').style.zIndex = '0';
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
    
    // Clear additional contexts if necessary (assuming they exist)
    if (typeof arrows !== 'undefined') {
        arrows = [];
    }
    if (typeof arrowContext !== 'undefined' && typeof arrowCanvas !== 'undefined') {
        arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
    }
});
