<?php
include("../model/commentdb.php");

if($_POST['method'] == "insert_comment"){
    insert_comment();
}

if($_POST['method'] == "get_comment"){
    get_comment();
}

?>