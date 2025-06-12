<?php

include_once 'DBHandler.php';

class EventsHandler {

  public static function getAllEvents(): array {

    $db_handler = DBHandler::createInstance();
    $connection = $db_handler->getConnection();

    // Query to select events from the database
    $query = "SELECT * FROM events";
    $result = $connection->query($query);

    // Fetch events and store them in an array
    $events = array();
    while ($row = $result->fetch_assoc()) {
        $events[] = $row;
    }

    //returns all the events in array
    $jsonEvents = json_encode($events);
    return $events;
  }

  public static function insertNewEvent($eventName, $carManufacturer, $eventDate, $eventTime, $eventPlace): bool {

    $db_handler = DBHandler::createInstance();
    $conn = $db_handler->getConnection();

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO events (eventName, carManufacturer, eventDate, eventTime, eventPlace) VALUES (?, ?, ?, ?, ?)");
    if($conn->error) {
        print_r($conn->error);die;
    }
    $stmt->bind_param("sssss",$eventName, $carManufacturer, $eventDate, $eventTime, $eventPlace);

    //returns true or false
    return $stmt->execute();
  }
}


?>