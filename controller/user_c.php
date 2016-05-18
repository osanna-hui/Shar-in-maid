<?php
include("../model/userdb.php");

if($_POST['method'] == "insert_user"){
    insert_user();
}

if($_POST['method'] == "user_logged_in"){
    user_logged_in();
}

if($_POST['method'] == "view"){
    view_profile();
}

if($_POST['method'] == "get_users"){
    get_users();
}

if($_POST['method'] == "update_profile_img"){
    update_profile_img();
}

if($_POST['method'] == "update_user"){
    update_user();
}

if($_POST['method'] == "delete_users"){
    delete_users();
}

?>