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









document.getElementById('btnFile').onclick = function() {
    
    document.getElementById('FileUpload').click();

   let a = document.getElementById('FileUpload').value;

    alert(a)
    


};