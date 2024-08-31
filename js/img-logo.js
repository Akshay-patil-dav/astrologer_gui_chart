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
