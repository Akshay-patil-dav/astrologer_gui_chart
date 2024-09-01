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







// document.getElementById('btnFile').onclick = function(event) {
    // 
        // document.getElementById('FileUpload').click();

//    let a = document.getElementById('FileUpload').value;

//    document.getElementById('displayImage').src = a;
//             document.getElementById('displayImage').style.display = 'block';
    // alert(a)
   
// };

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

