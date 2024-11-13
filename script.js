// Initial time setup
let hour = 12;  // Start at 12:00 AM
let minute = 0; // Start at 00 minutes
let second = 0; // Start at 00 seconds

// Function to format time as HH:MM AM/PM
function formatTime(hour, minute, second) {
    // Convert hour to 12-hour format and determine AM/PM
    let period = hour >= 12 ? 'AM' : 'PM';  // We want AM/PM, so this is the correct condition
    let formattedHour = hour % 12;
    formattedHour = formattedHour === 0 ? 12 : formattedHour; // Handle midnight (0) as 12
    const formattedMinute = minute < 10 ? '0' + minute : minute;
    const formattedSecond = second < 10 ? '0' + second : second;
    
    return `${formattedHour}:${formattedMinute}:${formattedSecond} ${period}`;
}

// Function to update the time every second
function updateTime() {
    // Select the element in the taskbar that displays the time
    const timeElement = document.querySelector('.time');

    // Format and display the time
    timeElement.textContent = formatTime(hour, minute, second);

    // Increment second
    second++;

    // If second reaches 59, increment minute and reset second
    if (second === 60) {
        second = 0;
        minute++;
    }

    // If minute reaches 60, increment hour and reset minute
    if (minute === 60) {
        minute = 0;
        hour++;
    }

    // If hour reaches 12:00 AM, reset hour, minute, and second to 12:00 AM
    if (hour === 12 && minute === 0 && second === 0) {
        hour = 12; // Reset hour to 12
        minute = 0; // Reset minute to 00
        second = 0; // Reset second to 00
    }
}

// Ensure the time is updated when the page loads
window.onload = function() {
    // Set the time to 12:00 AM when the page first loads
    hour = 12;
    minute = 0;
    second = 0;

    // Update the time immediately when the page loads
    updateTime();

    // Update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000); // Update every 1 second
};

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
