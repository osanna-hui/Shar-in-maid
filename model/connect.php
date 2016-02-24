<?php

try{
    $db = new PDO ("mysql:dbname=shar_n;host=localhost", "root", "root");
} catch (PDOException $e) {
    echo "Fail";
}

?>