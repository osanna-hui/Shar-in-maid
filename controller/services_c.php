<?php

include("../model/services_db.php");

if($_POST['method'] == "insert_services"){
    insert_services();
}

if($_POST['method'] == "get_services"){
    get_services();
}

if($_POST['method'] == "update_services"){
    update_services();
}
if($_POST['method'] == "delete_services"){
    delete_services();
}

?>