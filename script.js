// Get modal and close button
var modal = document.getElementById("modal");
var closeModal = document.getElementById("close-modal");

// Open modal when "My Computer" icon is clicked
document.getElementById("my-computer").addEventListener("click", function() {
    modal.style.display = "flex";
});

// Close modal when close button is clicked
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
