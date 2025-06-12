<?php

class DBHandler {

    private string $servername;
    private string $username;
    private string $password;
    private string $database;

    private $connection = null;
    private static ?DBHandler $instance = null;

    private function __construct(string $servername, string $username, string $password, string $database) {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;

        // Create connection
        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $this->connection = $conn;
    }

    public static function createInstance(): DBHandler {
        if(self::$instance == null) {
            $servername = "localhost:3306";
            $username = "racheliam";
            $password = "Web123@Project";
            $database = "racheliam_form";
            self::$instance =  new self($servername, $username, $password, $database);
        }
        return self::$instance;
    }

    public function getConnection(): mysqli {
        return $this->connection;
    }

}


?>