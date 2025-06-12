// Get all event items
var eventItems = document.querySelectorAll('.event-item');
var index = 0; // Start with the first event (index 0)

function showNextEvent() {
    // Hide the current event
    eventItems[index].style.display = 'none';

    // Move to the next event
    index = (index + 1) % eventItems.length;

    // Show the next event
    eventItems[index].style.display = 'block';
}

// Switch to the next event every 3 seconds
setInterval(showNextEvent, 3000);
