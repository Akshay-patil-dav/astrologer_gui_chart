function box1sel(value){
    var selectedValue = value;
    var popups = document.querySelectorAll('.popup');
    
    // Close any open popups
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Open the selected popup
    if (selectedValue) {
        document.getElementById(selectedValue).style.display = 'block';
    }
}

// Close the popup when the close button is clicked
document.querySelectorAll('.closeBtn').forEach(function(button) {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Optional: Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});



function box1sel2(value){
    var selectedValue = value;
    var popups = document.querySelectorAll('.popup');
    
    // Close any open popups
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Open the selected popup
    if (selectedValue) {
        document.getElementById(selectedValue).style.display = 'block';
    }
}

// Close the popup when the close button is clicked
document.querySelectorAll('.closeBtn').forEach(function(button) {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Optional: Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});





// *******************************
document.getElementById('FileUpload').onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = "100%";
            imgElement.style.maxHeight = "100%";

            const previewContainer = document.getElementById('displayImage');
            previewContainer.innerHTML = '';
            previewContainer.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
};


document.getElementById('FileUpload2').onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = "100%";
            imgElement.style.maxHeight = "100%";

            const previewContainer = document.getElementById('displayImage2');
            previewContainer.innerHTML = '';
            previewContainer.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
};


function Background1(val){
        // alert(val)
        document.getElementById('nav').style.backgroundColor = val
}
function Background2(val){
    // alert(val)
    document.getElementById('nav').style.backgroundColor = val
}
function Background3(val){
    // alert(val)
    document.getElementById('nav').style.backgroundColor = val
}
function Background4(val){
    // alert(val)
    document.getElementById('nav').style.backgroundColor = val
}

function fontcolor1(val){
    // alert(val)
    document.getElementById('fullname').style.color = val
    document.getElementById('name').style.color = val
    document.getElementById('mail').style.color = val
    document.getElementById('ph').style.color = val
    document.getElementById('phone').style.color = val
    document.getElementById('email').style.color = val

}

function fontcolor2(val){
    // alert(val)
    document.getElementById('fullname').style.color = val
    document.getElementById('name').style.color = val
    document.getElementById('mail').style.color = val
    document.getElementById('ph').style.color = val
    document.getElementById('phone').style.color = val
    document.getElementById('email').style.color = val

}
function fontcolor3(val){
    // alert(val)
    document.getElementById('fullname').style.color = val
    document.getElementById('name').style.color = val
    document.getElementById('mail').style.color = val
    document.getElementById('ph').style.color = val
    document.getElementById('phone').style.color = val
    document.getElementById('email').style.color = val

}
function fontcolor4(val){
    // alert(val)
    document.getElementById('fullname').style.color = val
    document.getElementById('name').style.color = val
    document.getElementById('mail').style.color = val
    document.getElementById('ph').style.color = val
    document.getElementById('phone').style.color = val
    document.getElementById('email').style.color = val

}

function fontcolor5(val){
    // alert(val)
    document.getElementById('fullname').style.color = val
    document.getElementById('name').style.color = val
    document.getElementById('mail').style.color = val
    document.getElementById('ph').style.color = val
    document.getElementById('phone').style.color = val
    document.getElementById('email').style.color = val

}


function body1(val){
    // alert(val)
    document.getElementById('background').style.backgroundColor = val

}
function body2(val){
    // alert(val)
    document.getElementById('background').style.backgroundColor = val

}
function body3(val){
    // alert(val)
    document.getElementById('background').style.backgroundColor = val

}
function body4(val){
    // alert(val)
    document.getElementById('background').style.backgroundColor = val

}
function body5(val){
    // alert(val)
    document.getElementById('background').style.backgroundColor = val

}

function f1(val){
    // alert(val)
    document.getElementById('chartlagn').style.color = val
    document.getElementById('text1').style.color = val
    document.getElementById('text2').style.color = val
    document.getElementById('text3').style.color = val
    document.getElementById('text4').style.color = val
    document.getElementById('text5').style.color = val
    document.getElementById('text6').style.color = val
    document.getElementById('text7').style.color = val
    document.getElementById('text8').style.color = val
    document.getElementById('text9').style.color = val

    document.getElementById('text11').style.color = val
    document.getElementById('text22').style.color = val
    document.getElementById('text33').style.color = val
    document.getElementById('text44').style.color = val
    document.getElementById('text55').style.color = val
    document.getElementById('text66').style.color = val
    document.getElementById('text77').style.color = val
    document.getElementById('text88').style.color = val
    document.getElementById('text99').style.color = val

    document.getElementById('n1').style.color = val
    document.getElementById('n2').style.color = val
    document.getElementById('n3').style.color = val
    document.getElementById('n4').style.color = val
    document.getElementById('n5').style.color = val
    document.getElementById('n6').style.color = val
    document.getElementById('n7').style.color = val
    document.getElementById('n8').style.color = val
    document.getElementById('n9').style.color = val
    document.getElementById('n10').style.color = val
    document.getElementById('n11').style.color = val
    document.getElementById('n12').style.color = val

    document.getElementById('colorbox').style.color = val
    document.getElementById('penbox').style.color = val
    document.getElementById('arrowbox').style.color = val

    document.getElementById('imm1').style.color = val
    document.getElementById('imm2').style.color = val
    document.getElementById('imm3').style.color = val
    document.getElementById('imm4').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm6').style.color = val
    document.getElementById('imm7').style.color = val

    document.getElementById('planets').style.color = val
    

}

function f2(val){
    // alert(val)
    document.getElementById('chartlagn').style.color = val
    document.getElementById('text1').style.color = val
    document.getElementById('text2').style.color = val
    document.getElementById('text3').style.color = val
    document.getElementById('text4').style.color = val
    document.getElementById('text5').style.color = val
    document.getElementById('text6').style.color = val
    document.getElementById('text7').style.color = val
    document.getElementById('text8').style.color = val
    document.getElementById('text9').style.color = val

    document.getElementById('text11').style.color = val
    document.getElementById('text22').style.color = val
    document.getElementById('text33').style.color = val
    document.getElementById('text44').style.color = val
    document.getElementById('text55').style.color = val
    document.getElementById('text66').style.color = val
    document.getElementById('text77').style.color = val
    document.getElementById('text88').style.color = val
    document.getElementById('text99').style.color = val

    
    document.getElementById('n1').style.color = val
    document.getElementById('n2').style.color = val
    document.getElementById('n3').style.color = val
    document.getElementById('n4').style.color = val
    document.getElementById('n5').style.color = val
    document.getElementById('n6').style.color = val
    document.getElementById('n7').style.color = val
    document.getElementById('n8').style.color = val
    document.getElementById('n9').style.color = val
    document.getElementById('n10').style.color = val
    document.getElementById('n11').style.color = val
    document.getElementById('n12').style.color = val

    document.getElementById('colorbox').style.color = val
    document.getElementById('penbox').style.color = val
    document.getElementById('arrowbox').style.color = val

    document.getElementById('imm1').style.color = val
    document.getElementById('imm2').style.color = val
    document.getElementById('imm3').style.color = val
    document.getElementById('imm4').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm6').style.color = val
    document.getElementById('imm7').style.color = val

}

function f3(val){
    // alert(val)
    document.getElementById('chartlagn').style.color = val
    document.getElementById('text1').style.color = val
    document.getElementById('text2').style.color = val
    document.getElementById('text3').style.color = val
    document.getElementById('text4').style.color = val
    document.getElementById('text5').style.color = val
    document.getElementById('text6').style.color = val
    document.getElementById('text7').style.color = val
    document.getElementById('text8').style.color = val
    document.getElementById('text9').style.color = val

    document.getElementById('text11').style.color = val
    document.getElementById('text22').style.color = val
    document.getElementById('text33').style.color = val
    document.getElementById('text44').style.color = val
    document.getElementById('text55').style.color = val
    document.getElementById('text66').style.color = val
    document.getElementById('text77').style.color = val
    document.getElementById('text88').style.color = val
    document.getElementById('text99').style.color = val

    
    document.getElementById('n1').style.color = val
    document.getElementById('n2').style.color = val
    document.getElementById('n3').style.color = val
    document.getElementById('n4').style.color = val
    document.getElementById('n5').style.color = val
    document.getElementById('n6').style.color = val
    document.getElementById('n7').style.color = val
    document.getElementById('n8').style.color = val
    document.getElementById('n9').style.color = val
    document.getElementById('n10').style.color = val
    document.getElementById('n11').style.color = val
    document.getElementById('n12').style.color = val

    document.getElementById('colorbox').style.color = val
    document.getElementById('penbox').style.color = val
    document.getElementById('arrowbox').style.color = val


    document.getElementById('imm1').style.color = val
    document.getElementById('imm2').style.color = val
    document.getElementById('imm3').style.color = val
    document.getElementById('imm4').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm6').style.color = val
    document.getElementById('imm7').style.color = val
}
function f4(val){
    // alert(val)
    document.getElementById('chartlagn').style.color = val
    document.getElementById('text1').style.color = val
    document.getElementById('text2').style.color = val
    document.getElementById('text3').style.color = val
    document.getElementById('text4').style.color = val
    document.getElementById('text5').style.color = val
    document.getElementById('text6').style.color = val
    document.getElementById('text7').style.color = val
    document.getElementById('text8').style.color = val
    document.getElementById('text9').style.color = val

    document.getElementById('text11').style.color = val
    document.getElementById('text22').style.color = val
    document.getElementById('text33').style.color = val
    document.getElementById('text44').style.color = val
    document.getElementById('text55').style.color = val
    document.getElementById('text66').style.color = val
    document.getElementById('text77').style.color = val
    document.getElementById('text88').style.color = val
    document.getElementById('text99').style.color = val

    
    document.getElementById('n1').style.color = val
    document.getElementById('n2').style.color = val
    document.getElementById('n3').style.color = val
    document.getElementById('n4').style.color = val
    document.getElementById('n5').style.color = val
    document.getElementById('n6').style.color = val
    document.getElementById('n7').style.color = val
    document.getElementById('n8').style.color = val
    document.getElementById('n9').style.color = val
    document.getElementById('n10').style.color = val
    document.getElementById('n11').style.color = val
    document.getElementById('n12').style.color = val

    document.getElementById('colorbox').style.color = val
    document.getElementById('penbox').style.color = val
    document.getElementById('arrowbox').style.color = val


    document.getElementById('imm1').style.color = val
    document.getElementById('imm2').style.color = val
    document.getElementById('imm3').style.color = val
    document.getElementById('imm4').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm6').style.color = val
    document.getElementById('imm7').style.color = val
}

function f5(val){
    // alert(val)
    document.getElementById('chartlagn').style.color = val
    document.getElementById('text1').style.color = val
    document.getElementById('text2').style.color = val
    document.getElementById('text3').style.color = val
    document.getElementById('text4').style.color = val
    document.getElementById('text5').style.color = val
    document.getElementById('text6').style.color = val
    document.getElementById('text7').style.color = val
    document.getElementById('text8').style.color = val
    document.getElementById('text9').style.color = val

    document.getElementById('text11').style.color = val
    document.getElementById('text22').style.color = val
    document.getElementById('text33').style.color = val
    document.getElementById('text44').style.color = val
    document.getElementById('text55').style.color = val
    document.getElementById('text66').style.color = val
    document.getElementById('text77').style.color = val
    document.getElementById('text88').style.color = val
    document.getElementById('text99').style.color = val

    
    document.getElementById('n1').style.color = val
    document.getElementById('n2').style.color = val
    document.getElementById('n3').style.color = val
    document.getElementById('n4').style.color = val
    document.getElementById('n5').style.color = val
    document.getElementById('n6').style.color = val
    document.getElementById('n7').style.color = val
    document.getElementById('n8').style.color = val
    document.getElementById('n9').style.color = val
    document.getElementById('n10').style.color = val
    document.getElementById('n11').style.color = val
    document.getElementById('n12').style.color = val

    document.getElementById('colorbox').style.color = val
    document.getElementById('penbox').style.color = val
    document.getElementById('arrowbox').style.color = val


    document.getElementById('imm1').style.color = val
    document.getElementById('imm2').style.color = val
    document.getElementById('imm3').style.color = val
    document.getElementById('imm4').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm5').style.color = val
    document.getElementById('imm6').style.color = val
    document.getElementById('imm7').style.color = val
}











