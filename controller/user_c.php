<?php
include("../model/userdb.php");

if($_POST['method'] == "insert_user"){
    insert_user();
}

if($_POST['method'] == "get_users"){
    get_users();
}

if($_POST['method'] == "update_user"){
    update_user();
}

if($_POST['method'] == "delete_users"){
    delete_users();
}

?>