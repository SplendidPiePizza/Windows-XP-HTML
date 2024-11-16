// Time setup
let hour = 12;  // Start at 12:00 AM
let minute = 0; // Start at 00 minutes
let second = 0; // Start at 00 seconds

// Function to format time as HH:MM AM/PM
function formatTime(hour, minute, second) {
    const period = hour >= 12 ? 'AM' : 'PM';  // AM or PM
    let formattedHour = hour % 12 || 12; // 12-hour format, handle midnight (0) as 12
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const formattedSecond = second < 10 ? `0${second}` : second;
    return `${formattedHour}:${formattedMinute}:${formattedSecond} ${period}`;
}

// Function to update the time every second
function updateTime() {
    const timeElement = document.querySelector('.time');
    timeElement.textContent = formatTime(hour, minute, second);  // Format and show time

    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    if (hour === 24) {  // Reset at 12:00 AM
        hour = 0;
    }
}

// Update time when the page loads
window.onload = function () {
    updateTime();  // Set initial time
    setInterval(updateTime, 1000);  // Update time every second
};

// Start menu toggle logic
const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const colorPickerModal = document.getElementById("color-picker-modal");
const closeColorModal = document.getElementById("close-color-modal");
const colorPicker = document.getElementById("color-picker");

// Toggle start menu visibility
startBtn.addEventListener("click", function () {
    startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
});

// Close the start menu if clicked outside
window.addEventListener("click", function (event) {
    if (!startBtn.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.style.display = "none";
    }
});

// Open modal for "My Computer"
document.getElementById("my-computer").addEventListener("click", function () {
    modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Open color picker modal when "Solid Color" is clicked
document.getElementById("change-background").addEventListener("click", function () {
    const changeBackgroundMenu = document.createElement('div');
    changeBackgroundMenu.classList.add('start-menu-item');
    changeBackgroundMenu.innerHTML = `
        <div class="start-menu-item" id="bliss">
            <p>Bliss (Windows XP background)</p>
        </div>
        <div class="start-menu-item" id="solid-color">
            <p>Solid Color</p>
        </div>
    `;
    startMenu.appendChild(changeBackgroundMenu);

    // Handle Bliss background option
    document.getElementById('bliss').addEventListener('click', function () {
        document.body.style.backgroundImage = 'url(images/bliss.jpg)';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        startMenu.removeChild(changeBackgroundMenu);
    });

    // Handle Solid Color option
    document.getElementById('solid-color').addEventListener('click', function () {
        colorPickerModal.style.display = 'flex';
        startMenu.removeChild(changeBackgroundMenu);
    });
});

// Close color picker modal
closeColorModal.addEventListener("click", function () {
    colorPickerModal.style.display = "none";
});

// Change background to selected color
colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value;
});
