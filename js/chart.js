// import {drack} from './drack';

// drack();


  // Add dragstart event to color swatches
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('color', e.target.style.backgroundColor);
    });
});

// Add dragover event to allow dropping
// document.getElementById('dropBox1')/.addEventListener('dragover', function(e) {
//     e.preventDefault();  // Necessary to allow dropping
// });

// Add drop event to change box color


// Add dragover event to allow dropping
document.getElementById('dropBox9').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox3').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

document.getElementById('dropBox2').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox7').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox13').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox20').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

document.getElementById('dropBox21').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
document.getElementById('dropBox16').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

document.getElementById('dropBox10').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});


document.getElementById('dropBox15').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});


document.getElementById('dropBox14').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

document.getElementById('cardbox1').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});

document.getElementById('dropBox8').addEventListener('dragover', function(e) {
    e.preventDefault();  // Necessary to allow dropping
});
// Add drop event to change box color**********************************************************


document.getElementById('cardbox1').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});

document.getElementById('dropBox15').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox14').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox8').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox21').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});

document.getElementById('dropBox10').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox16').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox20').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox13').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox7').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox2').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox3').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});
document.getElementById('dropBox9').addEventListener('drop', function(e) {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = color;
});