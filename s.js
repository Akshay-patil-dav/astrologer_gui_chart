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
makeElementDraggable(document.getElementById('mydiv8'));

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
    const duplicates = document.querySelectorAll('.mydiv8.clone');
    duplicates.forEach(clone => {
        clone.style.display = 'none'; // Hide all duplicates
    });
}

// Function to duplicate the draggable DIV
function duplicateDiv() {
    const originalDiv = document.getElementById('mydiv8');
    const clone = originalDiv.cloneNode(true);

    // Set a unique ID for the cloned DIV (optional)
    clone.id = "mydiv8" + document.getElementsByClassName('mydiv8').length;

    // Mark it as a clone
    clone.classList.add('clone');

    // Position the cloned DIV slightly offset from the original
    clone.style.top = (originalDiv.offsetTop + 728) + "px";
    clone.style.left = (originalDiv.offsetLeft + 70) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone);

    // Make the cloned DIV draggable
    makeElementDraggable(clone);
}

// ********************************************************************************************************************************



let duplicating2 = false;
let duplicateInterval2;

function makeElementDraggable2(element2) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element2.onmousedown = function(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement2;
        document.onmousemove = elementDrag2;
    };

    function elementDrag2(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element2.style.top = (element2.offsetTop - pos2) + "px";
        element2.style.left = (element2.offsetLeft - pos1) + "px";
    }

    function closeDragElement2() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Make the initial DIV draggable
makeElementDraggable2(document.getElementById('mydiv2'));

// Function to start infinite duplication
function startDuplicating2() {
    if (duplicating2) return; // Prevent starting multiple intervals
    duplicating2 = true;
    duplicateInterval2 = setInterval(duplicateDiv2, 1000); // Duplicate every second
}

// Function to stop infinite duplication and hide all duplicated elements
function stopDuplicating2() {
    duplicating2 = false;
    clearInterval(duplicateInterval2);
    const duplicates = document.querySelectorAll('.mydiv2.clone2');
    duplicates.forEach(clone2 => {
        clone2.style.display = 'none'; // Hide all duplicates
    });
}

// Function to duplicate the draggable DIV
function duplicateDiv2() {
    const originalDiv = document.getElementById('mydiv2');
    const clone2 = originalDiv.cloneNode(true);

    // Set a unique ID for the cloned DIV (optional)
    clone2.id = "mydiv2" + document.getElementsByClassName('mydiv2').length;

    // Mark it as a clone
    clone2.classList.add('clone2');

    // Position the cloned DIV slightly offset from the original
    clone2.style.top = (originalDiv.offsetTop + 710) + "px";
    clone2.style.left = (originalDiv.offsetLeft + 70) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone2);

    // Make the cloned DIV draggable
    makeElementDraggable2(clone2);
}



document.getElementById('input22').addEventListener('change', function() {
    if (this.checked) {
        startDuplicating2()

        startDuplicating()
    }});

    // ****************************************************************

    