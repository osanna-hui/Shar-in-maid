<?php
include("../model/favouritedb.php");

if($_POST['method'] == "insert_favourite"){
    insert_favourite();
}

if($_POST['method'] == "get_user_favourite"){
    get_user_favourite();
}

if($_POST['method'] == "delete_favourite"){
    delete_favourite();
}

?>