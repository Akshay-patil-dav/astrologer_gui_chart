
// ***************************************

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv1"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv4"));
dragElement(document.getElementById("mydiv6"));
dragElement(document.getElementById("mydiv7"));
dragElement(document.getElementById("mydiv8"));
dragElement(document.getElementById("mydiv9"));


// Store the original position and styles
const myDiv = document.getElementById("mydiv");
const originalStyles = {
    top: window.getComputedStyle(myDiv).top,
    left: window.getComputedStyle(myDiv).left,
    backgroundColor: window.getComputedStyle(myDiv).backgroundColor,
    color: window.getComputedStyle(myDiv).color,
    border: window.getComputedStyle(myDiv).border,
    padding: window.getComputedStyle(myDiv).padding
}; 

// const myDi9 = document.getElementById("mydi9");
// const originalStyles9 = {
//     top: window.getComputedStyle(myDiv9).top,
//     left: window.getComputedStyle(myDiv9).left,
//     backgroundColor: window.getComputedStyle(myDi9).backgroundColor,
//     color: window.getComputedStyle(myDi9).color,
//     border: window.getComputedStyle(myDiv9).border,
//     padding: window.getComputedStyle(myDiv9).padding
// };

const myDiv1 = document.getElementById("mydiv1");
const originalStyles1 = {
    top: window.getComputedStyle(myDiv1).top,
    left: window.getComputedStyle(myDiv1).left,
    backgroundColor: window.getComputedStyle(myDiv1).backgroundColor,
    color: window.getComputedStyle(myDiv1).color,
    border: window.getComputedStyle(myDiv1).border,
    padding: window.getComputedStyle(myDiv1).padding
};

const myDiv3 = document.getElementById("mydiv3");
const originalStyles3 = {
    top: window.getComputedStyle(myDiv3).top,
    left: window.getComputedStyle(myDiv3).left,
    backgroundColor: window.getComputedStyle(myDiv3).backgroundColor,
    color: window.getComputedStyle(myDiv3).color,
    border: window.getComputedStyle(myDiv3).border,
    padding: window.getComputedStyle(myDiv3).padding
};


const myDiv4 = document.getElementById("mydiv4");
const originalStyles4 = {
    top: window.getComputedStyle(myDiv4).top,
    left: window.getComputedStyle(myDiv4).left,
    backgroundColor: window.getComputedStyle(myDiv4).backgroundColor,
    color: window.getComputedStyle(myDiv4).color,
    border: window.getComputedStyle(myDiv4).border,
    padding: window.getComputedStyle(myDiv4).padding
};

      
const myDiv6 = document.getElementById("mydiv6");
const originalStyles6 = {
    top: window.getComputedStyle(myDiv6).top,
    left: window.getComputedStyle(myDiv6).left,
    backgroundColor: window.getComputedStyle(myDiv6).backgroundColor,
    color: window.getComputedStyle(myDiv6).color,
    border: window.getComputedStyle(myDiv6).border,
    padding: window.getComputedStyle(myDiv6).padding
};

      
const myDiv7 = document.getElementById("mydiv7");
const originalStyles7 = {
    top: window.getComputedStyle(myDiv7).top,
    left: window.getComputedStyle(myDiv7).left,
    backgroundColor: window.getComputedStyle(myDiv7).backgroundColor,
    color: window.getComputedStyle(myDiv7).color,
    border: window.getComputedStyle(myDiv7).border,
    padding: window.getComputedStyle(myDiv7).padding
};

      
const myDiv8 = document.getElementById("mydiv8");
const originalStyles8 = {
    top: window.getComputedStyle(myDiv8).top,
    left: window.getComputedStyle(myDiv8).left,
    backgroundColor: window.getComputedStyle(myDiv8).backgroundColor,
    color: window.getComputedStyle(myDiv8).color,
    border: window.getComputedStyle(myDiv8).border,
    padding: window.getComputedStyle(myDiv8).padding
};

const myDiv9 = document.getElementById("mydiv9")
const originalStyles9 = {
    top: window.getComputedStyle(myDiv9).top,
    left: window.getComputedStyle(myDiv9).left,
    backgroundColor: window.getComputedStyle(myDiv9).backgroundColor,
    color: window.getComputedStyle(myDiv9).color,
    border: window.getComputedStyle(myDiv9).border,
    padding: window.getComputedStyle(myDiv9).padding
};


const myDiv2 = document.getElementById("mydiv2");
const originalStyles2 = {
    top: window.getComputedStyle(myDiv2).top,
    left: window.getComputedStyle(myDiv2).left,
    backgroundColor: window.getComputedStyle(myDiv2).backgroundColor,
    color: window.getComputedStyle(myDiv2).color,
    border: window.getComputedStyle(myDiv2).border,
    padding: window.getComputedStyle(myDiv2).padding
};





function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// myDiv.style.left =  '268px';
// Add event listener for the reset button
document.getElementById("resetButton").addEventListener("click", () => {

    


    myDiv.style.top = originalStyles.top;
    myDiv.style.left = originalStyles.left;
    myDiv.style.backgroundColor = originalStyles.backgroundColor;
    myDiv.style.color = originalStyles.color;
    myDiv.style.border = originalStyles.border;
    myDiv.style.padding = originalStyles.padding;

    myDiv1.style.top = originalStyles.top;
    myDiv1.style.left =  '38px';
    myDiv1.style.backgroundColor = originalStyles.backgroundColor;
    myDiv1.style.color = originalStyles.color;
    myDiv1.style.border = originalStyles.border;
    myDiv1.style.padding = originalStyles.padding;


    myDiv2.style.top = originalStyles.top;
    myDiv2.style.left =  '38px';
    myDiv2.style.backgroundColor = originalStyles.backgroundColor;
    myDiv2.style.color = originalStyles.color;
    myDiv2.style.border = originalStyles.border;
    myDiv2.style.padding = originalStyles.padding;

    myDiv3.style.top = originalStyles.top;
    myDiv3.style.left =  '38px';
    myDiv3.style.backgroundColor = originalStyles.backgroundColor;
    myDiv3.style.color = originalStyles.color;
    myDiv3.style.border = originalStyles.border;
    myDiv3.style.padding = originalStyles.padding;

    myDiv4.style.top = originalStyles.top;
    myDiv4.style.left =  '38px';
    myDiv4.style.backgroundColor = originalStyles.backgroundColor;
    myDiv4.style.color = originalStyles.color;
    myDiv4.style.border = originalStyles.border;
    myDiv4.style.padding = originalStyles.padding;
    
    myDiv6.style.top = originalStyles.top;
    myDiv6.style.left =  '38px';
    myDiv6.style.backgroundColor = originalStyles.backgroundColor;
    myDiv6.style.color = originalStyles.color;
    myDiv6.style.border = originalStyles.border;
    myDiv6.style.padding = originalStyles.padding;

    myDiv7.style.top = originalStyles.top;
    myDiv7.style.left =  '38px';
    myDiv7.style.backgroundColor = originalStyles.backgroundColor;
    myDiv7.style.color = originalStyles.color;
    myDiv7.style.border = originalStyles.border;
    myDiv7.style.padding = originalStyles.padding;

    myDiv8.style.top = originalStyles.top;
    myDiv8.style.left =  '38px';
    myDiv8.style.backgroundColor = originalStyles.backgroundColor;
    myDiv8.style.color = originalStyles.color;
    myDiv8.style.border = originalStyles.border;
    myDiv8.style.padding = originalStyles.padding;


    myDiv9.style.top = originalStyles.top;
    myDiv9.style.left =  '38px';
    myDiv9.style.backgroundColor = originalStyles.backgroundColor;
    myDiv9.style.color = originalStyles.color;
    myDiv9.style.border = originalStyles.border;
    myDiv9.style.padding = originalStyles.padding;


    // document.getElementById('val11').value="Pisces";

   
});


// *******************************
document.getElementById('fileInput').onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = "100%";
            imgElement.style.maxHeight = "100%";

            const previewContainer = document.getElementById('imagePreview');
            previewContainer.innerHTML = '';
            previewContainer.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
};

// ***********************************
function displayValue() {
    const input = document.getElementById('nameInput').value;
    // input ="./IMG20231128184411-removebg-preview.png";  
    
    document.getElementById('output').innerHTML = " <img src=" + input+ ">";
}

// *************************
  //Make the DIV element draggagle:
  dragElement(document.getElementById("mydiv"));
  dragElement(document.getElementById("mydiv1"));
  dragElement(document.getElementById("mydiv2"));
  dragElement(document.getElementById("mydiv3"));
  dragElement(document.getElementById("mydiv4"));

  dragElement(document.getElementById("mydiv6"));
  dragElement(document.getElementById("mydiv7"));
  dragElement(document.getElementById("mydiv8"));
  dragElement(document.getElementById("mydiv9"));
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


//   ******************************************************************

document.addEventListener('DOMContentLoaded', () => {
const colors = document.querySelectorAll('#colorPalette .color');
const dropBox = document.getElementById('dropBox');
const dropBox1 = document.getElementById('dropBox1');
const dropBox2 = document.getElementById('dropBox2');
const dropBox3 = document.getElementById('dropBox3');
const dropBox4 = document.getElementById('dropBox4');
const dropBox5 = document.getElementById('dropBox5');
const dropBox6 = document.getElementById('dropBox6');
const dropBox7 = document.getElementById('dropBox7');
const dropBox8 = document.getElementById('dropBox8');
const dropBox9 = document.getElementById('dropBox9');
const dropBox10 = document.getElementById('dropBox10');
const dropBox11 = document.getElementById('dropBox11');


colors.forEach(color => {
color.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', color.style.backgroundColor);
});
});

// *****************************
dropBox.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox.style.backgroundColor = color;

// Change size based on the color    
});

// *******************


// *****************************
dropBox1.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox1.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox1.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox2.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox2.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox2.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox3.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox3.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox3.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox4.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox4.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox4.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox5.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox5.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox5.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox6.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox6.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox6.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox7.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox7.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox7.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox8.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox8.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox8.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox9.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox9.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox9.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox10.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox10.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox10.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox11.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox11.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox11.style.backgroundColor = color;

// Change size based on the color    
});

// *******************
// *****************************
dropBox1.addEventListener('dragover', (e) => {
e.preventDefault(); // Necessary to allow dropping
});

dropBox1.addEventListener('drop', (e) => {
e.preventDefault();
const color = e.dataTransfer.getData('text/plain');
dropBox1.style.backgroundColor = color;

// Change size based on the color    
});

// *******************


});