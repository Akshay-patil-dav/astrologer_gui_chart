let arrowCanvas;
let arrowContext;
let isDrawing = false;
let startX, startY;
let arrows = [];
let arrowDrawingEnabled = false;  // Track whether arrow drawing is enabled
let arrowColor = '#000000';  // Default arrow color

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the arrow canvas
    initializeArrowCanvas();

    // Set up the toggle switch for arrow drawing
    const toggleArrowButton = document.getElementById('toggleArrowButton');
    toggleArrowButton.addEventListener('change', (e) => {
        arrowDrawingEnabled = e.target.checked;

        if (arrowDrawingEnabled) {
            // Set z-index to 7 when drawing is enabled
            arrowCanvas.style.zIndex = '7';
            arrowCanvas.style.pointerEvents = 'auto';
        } else {
            // Reset z-index to 1 when drawing is disabled
            arrowCanvas.style.zIndex = '1';
            arrowCanvas.style.pointerEvents = 'none';
            // Clear any ongoing drawing state
            isDrawing = false;
        }
    });

    // Add an event listener to update arrow color
    const arrowcolorPicker = document.getElementById('colorPicker');
    arrowcolorPicker.addEventListener('input', (e) => {
        arrowColor = e.target.value;
    });
});

function initializeArrowCanvas() {
    arrowCanvas = document.createElement('canvas');
    arrowCanvas.width = window.innerWidth;
    arrowCanvas.height = window.innerHeight;
    arrowCanvas.style.position = 'absolute';
    arrowCanvas.style.top = '0';
    arrowCanvas.style.left = '0';
    arrowCanvas.style.zIndex = '1';  // Default z-index when disabled
    arrowCanvas.style.pointerEvents = 'none';
    document.body.appendChild(arrowCanvas);

    arrowContext = arrowCanvas.getContext('2d');

    // Add event listeners for drawing arrows
    arrowCanvas.addEventListener('mousedown', startDrawing);
    arrowCanvas.addEventListener('mousemove', draw);
    arrowCanvas.addEventListener('mouseup', stopDrawing);
    arrowCanvas.addEventListener('mouseout', stopDrawing);
}

function startDrawing(e) {
    if (!arrowDrawingEnabled) return;  // Disable drawing if toggle is off

    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;
}

function draw(e) {
    if (!isDrawing || !arrowDrawingEnabled) return;

    // Clear the canvas to prevent continuous drawing of previous arrows
    arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);

    // Draw all existing arrows
    arrows.forEach(arrow => {
        drawArrowOnCanvas(arrow.startX, arrow.startY, arrow.endX, arrow.endY, arrow.color);
    });

    // Draw the current arrow being drawn
    drawArrowOnCanvas(startX, startY, e.clientX, e.clientY, arrowColor);
}

function stopDrawing(e) {
    if (!isDrawing || !arrowDrawingEnabled) return;
    isDrawing = false;

    // Save the arrow coordinates and color
    arrows.push({ startX, startY, endX: e.clientX, endY: e.clientY, color: arrowColor });
}

function drawArrowOnCanvas(x1, y1, x2, y2, color) {
    const headLength = 10;  // Length of the arrowhead

    const angle = Math.atan2(y2 - y1, x2 - x1);

    arrowContext.beginPath();
    arrowContext.moveTo(x1, y1);
    arrowContext.lineTo(x2, y2);
    arrowContext.lineTo(x2 - headLength * Math.cos(angle - Math.PI / 6), y2 - headLength * Math.sin(angle - Math.PI / 6));
    arrowContext.moveTo(x2, y2);
    arrowContext.lineTo(x2 - headLength * Math.cos(angle + Math.PI / 6), y2 - headLength * Math.sin(angle + Math.PI / 6));
    arrowContext.strokeStyle = color;  // Set arrow color from the saved color
    arrowContext.lineWidth = 2;  // Set arrow thickness
    arrowContext.stroke();
}

// Function to remove all arrows
function clearArrows() {
    arrows = [];
    arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
}

// Function to remove the last drawn arrow
function undoArrow() {
    arrows.pop();  // Remove the last arrow
    arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);

    // Redraw the remaining arrows
    arrows.forEach(arrow => {
        drawArrowOnCanvas(arrow.startX, arrow.startY, arrow.endX, arrow.endY, arrow.color);
    });
}

// Example of adding event listeners to buttons
document.getElementById('clearArrowsBtn').addEventListener('click', clearArrows);
document.getElementById('undoArrowBtn').addEventListener('click', undoArrow);

// document.getElementById('remove').addEventListener('click', clearArrows);