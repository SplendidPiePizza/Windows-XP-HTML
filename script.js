// Get elements
var startBtn = document.getElementById("start-btn");
var startMenu = document.getElementById("start-menu");
var modal = document.getElementById("modal");
var closeModal = document.getElementById("close-modal");

// Toggle start menu visibility
startBtn.addEventListener("click", function() {
    // Toggle the display of the start menu
    if (startMenu.style.display === "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
});

// Close the start menu if clicked outside
window.addEventListener("click", function(event) {
    if (!startBtn.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.style.display = "none";
    }
});

// Open modal for "My Computer"
document.getElementById("my-computer").addEventListener("click", function() {
    modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
