<?php

include("../model/services_db.php");

if($_POST['method'] == "insert_serv"){
    insert_services();
}

if($_POST['method'] == "get_serv"){
    get_services();
}

if($_POST['method'] == "update_serv"){
    update_services();
}
if($_POST['method'] == "delete_serv"){
    delete_services();
}

?>