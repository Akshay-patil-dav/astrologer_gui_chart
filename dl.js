let duplicating = false;
let duplicateInterval;

function makeElementDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = function(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Make the initial DIV draggable
makeElementDraggable(document.getElementById('col1'));

// Function to start infinite duplication
function startDuplicating() {
    if (duplicating) return; // Prevent starting multiple intervals
    duplicating = true;
    duplicateInterval = setInterval(duplicateDiv, 1000); // Duplicate every second
}

// Function to stop infinite duplication and hide all duplicated elements
function stopDuplicating() {
    duplicating = false;
    clearInterval(duplicateInterval);
    const duplicates = document.querySelectorAll('.col1.clone');
    duplicates.forEach(clone => {
        clone.style.display = 'none'; // Hide all duplicates
    });
}

// Function to duplicate the draggable DIV
function duplicateDiv() {
    const originalDiv = document.getElementById('col1');
    const clone = originalDiv.cloneNode(true);

    // Set a unique ID for the cloned DIV (optional)
    clone.id = "col" + document.getElementsByClassName('col1').length;

    // Mark it as a clone
    clone.classList.add('clone');

    // Position the cloned DIV slightly offset from the original
    clone.style.top = (originalDiv.offsetTop + 835) + "px";
    clone.style.left = (originalDiv.offsetLeft + 70) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone);

    // Make the cloned DIV draggable
    makeElementDraggable(clone);
}
