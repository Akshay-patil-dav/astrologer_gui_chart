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
    clone.style.top = (originalDiv.offsetTop + 712) + "px";
    clone.style.left = (originalDiv.offsetLeft + 15) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone);

    // Make the cloned DIV draggable
    makeElementDraggable(clone);
}

// *************************************************************************************************************



let duplicating1 = false;
let duplicateInterval1;

function makeElementDraggable1(element1) {
    let pos11 = 0, pos21 = 0, pos31 = 0, pos41 = 0;

    element1.onmousedown = function(e1) {
        e1.preventDefault();
        pos31 = e1.clientX;
        pos41 = e1.clientY;
        document.onmouseup = closeDragElement1;
        document.onmousemove = elementDrag1;
    };

    function elementDrag1(e1) {
        e1.preventDefault();
        pos11 = pos31 - e1.clientX;
        pos21 = pos41 - e1.clientY;
        pos31 = e1.clientX;
        pos41 = e1.clientY;
        element1.style.top = (element1.offsetTop - pos21) + "px";
        element1.style.left = (element1.offsetLeft - pos11) + "px";
    }

    function closeDragElement1() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Make the initial DIV draggable
makeElementDraggable1(document.getElementById('mydiv'));

function startDuplicating1() {
    if (duplicating1) return; // Prevent starting multiple intervals
    duplicating1 = true;
    duplicateInterval1 = setInterval(duplicateDiv1, 1000); // Duplicate every second
}

function stopDuplicating1() {
    duplicating1 = false;
    clearInterval(duplicateInterval1);
    const duplicates1 = document.querySelectorAll('.mydiv.clone1');
    duplicates1.forEach(clone1 => {
        clone1.style.display = 'none'; // Hide all duplicates
    });
}

function duplicateDiv1() {
    const originalDiv1 = document.getElementById('mydiv');
    const clone1 = originalDiv1.cloneNode(true);

    // Set a unique ID for the cloned DIV (optional)
    clone1.id = "mydiv" + document.getElementsByClassName('mydiv').length;

    // Mark it as a clone
    clone1.classList.add('clone1');

    // Position the cloned DIV slightly offset from the original
    clone1.style.top = (originalDiv1.offsetTop + 712) + "px";
    clone1.style.left = (originalDiv1.offsetLeft + 15) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone1);

    // Make the cloned DIV draggable
    makeElementDraggable1(clone1);
}

let duplicating2 = false;
let duplicateInterval2;

function makeElementDraggable2(element2) {
    let pos12 = 0, pos22 = 0, pos32 = 0, pos42 = 0;

    element2.onmousedown = function(e2) {
        e2.preventDefault();
        pos32 = e2.clientX;
        pos42 = e2.clientY;
        document.onmouseup = closeDragElement2;
        document.onmousemove = elementDrag2;
    };

    function elementDrag2(e2) {
        e2.preventDefault();
        pos12 = pos32 - e2.clientX;
        pos22 = pos42 - e2.clientY;
        pos32 = e2.clientX;
        pos42 = e2.clientY;
        element2.style.top = (element2.offsetTop - pos22) + "px";
        element2.style.left = (element2.offsetLeft - pos12) + "px";
    }

    function closeDragElement2() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Make the initial DIV draggable
makeElementDraggable2(document.getElementById('mydiv2'));

function startDuplicating2() {
    if (duplicating2) return; // Prevent starting multiple intervals
    duplicating2 = true;
    duplicateInterval2 = setInterval(duplicateDiv2, 1000); // Duplicate every second
}

function stopDuplicating2() {
    duplicating2 = false;
    clearInterval(duplicateInterval2);
    const duplicates2 = document.querySelectorAll('.mydiv2.clone2');
    duplicates2.forEach(clone2 => {
        clone2.style.display = 'none'; // Hide all duplicates
    });
}

function duplicateDiv2() {
    const originalDiv2 = document.getElementById('mydiv2');
    const clone2 = originalDiv2.cloneNode(true);

    // Set a unique ID for the cloned DIV (optional)
    clone2.id = "mydiv2" + document.getElementsByClassName('mydiv2').length;

    // Mark it as a clone
    clone2.classList.add('clone2');

    // Position the cloned DIV slightly offset from the original
    clone2.style.top = (originalDiv2.offsetTop + 712) + "px";
    clone2.style.left = (originalDiv2.offsetLeft + 50) + "px";

    // Append the cloned DIV to the body
    document.body.appendChild(clone2);

    // Make the cloned DIV draggable
    makeElementDraggable2(clone2);
}







document.getElementById('input22').addEventListener('change', function() {
    if (this.checked) {
        // startDuplicating2()
        startDuplicating()
        startDuplicating1()

    }});