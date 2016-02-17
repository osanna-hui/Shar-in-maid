<?php
include("../model/commentdb.php");

if($_POST['method'] == "insert"){
    insert_review();
}

if($_POST['method'] == "getall"){
    get_reviews();
}

?>