let myUniqueCanvas;
let myUniqueContext;
let isUserDrawing = false;
let startPosX, startPosY;
let userDrawings = [];
let isDrawingModeActive = false;  // Track whether drawing is enabled
let userSelectedColor = '#000000';  // Default drawing color
let isAutoAdjustEnabled = true;  // Auto adjust drawing positions when resizing
let lastPosX = 0, lastPosY = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the drawing canvas
    initializeUniqueDrawingCanvas();

    // Set up the toggle switch for drawing
    const toggleUniqueDrawingButton = document.getElementById('startDrawing');
    toggleUniqueDrawingButton.addEventListener('change', (e) => {
        isDrawingModeActive = e.target.checked;

        if (isDrawingModeActive) {
            myUniqueCanvas.style.zIndex = '8';
            myUniqueCanvas.style.pointerEvents = 'auto';
        } else {
            myUniqueCanvas.style.zIndex = '0';
            myUniqueCanvas.style.pointerEvents = 'none';
            isUserDrawing = false;
        }
    });

    // Add an event listener to update drawing color
    const uniqueColorPicker = document.getElementById('colorPicker');
    uniqueColorPicker.addEventListener('input', (e) => {
        userSelectedColor = e.target.value;
    });

    // Handle window resizing
    window.addEventListener('resize', adjustUniqueCanvasSize);
});

function initializeUniqueDrawingCanvas() {
    myUniqueCanvas = document.createElement('canvas');
    myUniqueCanvas.width = window.innerWidth *1;
    myUniqueCanvas.height = window.innerHeight *1;
    myUniqueCanvas.style.position = 'absolute';
    myUniqueCanvas.style.top = '0';
    myUniqueCanvas.style.left = '0';
    myUniqueCanvas.style.zIndex = '0';  // Default z-index when disabled
    myUniqueCanvas.style.pointerEvents = 'none';

    // arrowCanvas.style.top = '0';
    // arrowCanvas.style.left = '0';
    // arrowCanvas.style.zIndex = '0';  // Default z-index when disabled
    // arrowCanvas.style.pointerEvents = 'none';


    document.body.appendChild(myUniqueCanvas);

    myUniqueContext = myUniqueCanvas.getContext('2d');

    // Add event listeners for drawing
    myUniqueCanvas.addEventListener('mousedown', startUniqueDrawing);
    myUniqueCanvas.addEventListener('mousemove', performUniqueDrawing);
    myUniqueCanvas.addEventListener('mouseup', stopUniqueDrawing);
    myUniqueCanvas.addEventListener('mouseout', stopUniqueDrawing);
}

function adjustUniqueCanvasSize() {
    const savedUniqueDrawing = saveUniqueCanvas();  // Save the current drawing before resizing

    // Update canvas size
    myUniqueCanvas.width = window.innerWidth;
    myUniqueCanvas.height = window.innerHeight * 0.8;

    restoreUniqueCanvas(savedUniqueDrawing);  // Restore the drawing after resizing
}

function saveUniqueCanvas() {
    return myUniqueCanvas.toDataURL();  // Save the current drawing as a data URL
}

function restoreUniqueCanvas(dataURL) {
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
        myUniqueContext.drawImage(img, 0, 0);
    };
}

function startUniqueDrawing(e) {
    if (!isDrawingModeActive) return;

    isUserDrawing = true;
    lastPosX = e.clientX - myUniqueCanvas.offsetLeft;
    lastPosY = e.clientY - myUniqueCanvas.offsetTop;
}

function performUniqueDrawing(e) {
    if (!isUserDrawing || !isDrawingModeActive) return;

    const currentPosX = e.clientX - myUniqueCanvas.offsetLeft;
    const currentPosY = e.clientY - myUniqueCanvas.offsetTop;

    myUniqueContext.beginPath();
    myUniqueContext.moveTo(lastPosX, lastPosY);
    myUniqueContext.lineTo(currentPosX, currentPosY);

    myUniqueContext.strokeStyle = userSelectedColor;
    myUniqueContext.lineWidth = 2;
    myUniqueContext.lineCap = 'round';
    myUniqueContext.stroke();

    lastPosX = currentPosX;
    lastPosY = currentPosY;
}

function stopUniqueDrawing() {
    if (!isUserDrawing || !isDrawingModeActive) return;
    isUserDrawing = false;
}

document.getElementById('eraseDrawing').addEventListener('click', () => {
    myUniqueContext.clearRect(0, 0, myUniqueCanvas.width, myUniqueCanvas.height);
});

// Undo last drawing or remove canvas content if needed
document.getElementById('remove').addEventListener('click', () => {
    myUniqueContext.clearRect(0, 0, myUniqueCanvas.width, myUniqueCanvas.height);
});

// Automatically adjust canvas when window size changes
window.addEventListener('resize', adjustUniqueCanvasSize);
