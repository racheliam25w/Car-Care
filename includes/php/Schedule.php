<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schedule Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../css/schedule.css">
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
        <h3 class="content_title">Upcoming Maintenance Events</h3>
        <div class="calendar">
            <header2>
                <div class="prev-month" onclick="prevMonth()">&#10094;</div>
                <div class="current-month" id="current-month"></div>
                <div class="next-month" onclick="nextMonth()">&#10095;</div>
            </header2>
            <table id="calendar-table">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody id="calendar-body"></tbody>
            </table>
        </div>
        <a href="../../includes/php/Event.php" class="btn btn-primary btn-primary-anchor">
            Show Events
        </a>

        <button id="button" class="btn btn-primary" data-toggle="modal" data-target="#addEventModal">
            Add Event
        </button>
        </div>
        <div class="modal fade" id="addEventModal" tabindex="-1" role="dialog" aria-labelledby="addEventModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addEventModalLabel">Add New Event</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="eventForm" method="POST" action="../php/Event.php">
                            <div class="form-group">
                                <label for="eventName">Select Car Check</label>
                                <select name="eventName" class="form-control" id="eventName" required>
                                    <option value="" disabled selected>Select Car Check</option>
                                    <option value="Air Cabin Filter">Air cabin filter</option>
                                    <option value="Fluids">Fluids</option>
                                    <option value="Engine Air Filter">Engine air filter</option>
                                    <option value="Wash and Wax">Wash and wax</option>
                                    <option value="AC">AC</option>
                                    <option value="Brakes">Brakes</option>
                                    <option value="Tire Tread">Tire tread</option>
                                    <option value="Lights and Signals">Headlights, taillights, and signals</option>
                                    <option value="Tire Pressure">Tire pressure</option>
                                    <option value="Wiper Blades">Wiper blade</option>
                                    <option value="Oil Changes">Oil changes</option>
                                </select>
                            </div>
                             <div class="form-group">
                                <label for="carManufacturer">Car Manufacturer</label>
                                <select name="carManufacturer" class="form-control" id="carManufacturer" required>
                                    <option value="">Select Car Manufacturer</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Audi">Audi</option>
                                    <!-- Add more options as needed -->
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="eventDate">Date</label>
                                <input name="eventDate" type="date" class="form-control" id="eventDate" required>
                            </div>
                            <div class="form-group">
                                <label for="eventTime">Time</label>
                                <input name="eventTime" type="time" class="form-control" id="eventTime" required>
                            </div>
                            <div class="form-group">
                                <label for="eventPlace">Place</label>
                                <input name="eventPlace" type="text" class="form-control" id="eventPlace" required>
                            </div>
                       <br>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <input type="Submit" value="Save Event" class="btn btn-primary"
                                    onclick="validateAndSave()"></input>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    
    <?php 
    include '../../includes/php/Classes/EventsHandler.php';

    $events = EventsHandler::getAllEvents();
    $jsonEvents = json_encode($events);
    ?> 
    <script> var jsonEvents = <?php echo $jsonEvents; ?>; </script>
    <script src="../../JS/notActive.js"></script>
    <script src='../../JS/calendar.js'></script>
    

</body>

</html>