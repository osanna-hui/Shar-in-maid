<?php
include("../model/servicedb.php");

if($_POST['method'] == "insert_service"){
    insert_service();
}

if($_POST['method'] == "get_service"){
    get_service();
}

if($_POST['method'] == "update_service"){
    update_service();
}

if($_POST['method'] == "delete_service"){
    delete_service();
}

?>