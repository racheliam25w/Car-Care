<?php
include_once 'Classes/EventsHandler.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $eventName = $_POST['eventName'];
    $carManufacturer = $_POST['carManufacturer']; // Added line to retrieve car manufacturer
    $eventDate = $_POST['eventDate'];
    $eventTime = $_POST['eventTime'];
    $eventPlace = $_POST['eventPlace'];

    // Call the method to insert the new event into the database
    $bool_result = EventsHandler::insertNewEvent($eventName, $carManufacturer, $eventDate, $eventTime, $eventPlace);

    if (!$bool_result) {
        echo "Error in inserting new event";
        die;
    }
} else if($_SERVER["REQUEST_METHOD"] == "GET"){
    // Retrieve form data
    $eventName = $_GET['eventName'] ?? '';
    $carManufacturer = $_GET['carManufacturer'] ?? ''; // Added line to retrieve car manufacturer
    $eventDate = $_GET['eventDate'] ?? '';
    $eventTime = $_GET['eventTime'] ?? '';
    $eventPlace = $_GET['eventPlace'] ?? '';
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../css/event.css">
    <link rel="stylesheet" href="../../css/basic.css">
</head>

<body>
    <header>
        <aside id="head-container"></aside>
        <script src="../../JS/header.js"></script>
    </header>
    <aside id="menu-container"></aside>
    <script src="../../JS/menu.js"></script>
    <br>
  <section class="content">
        <h2 class="content_title">Welcome to your Events</h2>
        <div class="flex-container">
            <div class="content2">
                <h4 class="content_title">My New Event</h4>
                <?php 
                    if(!empty($eventName)){
                        echo "<p>Check: {$eventName}</p>";
                        echo "<p>Menufactor: {$carManufacturer}</p>";
                        echo "<p>Date: {$eventDate}</p>";  
                        echo "<p>Time: {$eventTime}</p>";  
                        echo "<p>Place:{$eventPlace}</p>";  
                    } else {
                        echo "You haven't created new events.";
                        echo "<br>";
                        echo "<a href='../../includes/php/Schedule.php#button' class='button'>Create New Event</a>";
                    }

                ?>
            </div>
           <div class="running-message-container">
                <h4 class="content_title">Upcoming Events</h4>
                <div id="upcomingEvents" class="running-message">
                <?php 
                $events = EventsHandler::getAllEvents();
                if (!empty($events)) {
                    foreach ($events as $index => $event) {
                        echo "<div class='event-item' style='display: " . ($index === 0 ? 'block' : 'none') . ";'>";
                        echo "Check: " . $event['eventName'] . "<br>";
                        echo "Menufactor: " . $event['carManufacturer'] . "<br>";
                        echo "Date: " . $event['eventDate'] . "<br>";
                        echo "Time: " . $event['eventTime'] . "<br>";
                        echo "Place: " . $event['eventPlace'] . "<br>";
                        echo "</div>";
                    }
                } else {
                    echo "No upcoming events.";
                }
                ?>
            </div>
        </div>
    </section>
    <br>
    <footer class="text-center">
        <label class="footer_icons">
            <a href="#" class="notActive"><img src="../../Img/facebook.webp" alt="Facebook" width="3%" height="3%"></a>
            <a href="#" class="notActive"><img src="../../Img/insta.png" alt="Instagram" width="3.5%" height="3.5%"></a>
            <a href="#" class="notActive"><img src="../../Img/phone.png" alt="Phone" width="3%" height="3%"></a>
            <a href="mailto:carcare@example.com"><img src="../../Img/mail.png" alt="Mail" width="3%" height="3%"></a>
        </label>
        <br>
        <p> &copy; 2024 Car Care </p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../../JS/search.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/5.10.1/fullcalendar.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/5.10.1/fullcalendar.min.js"></script>
    <script src="../../JS/notActive.js"></script>
    <script src="../../JS/event.js"></script>

</body>

</html>