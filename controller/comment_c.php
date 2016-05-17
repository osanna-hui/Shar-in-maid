<?php
include("../model/commentdb.php");

if($_POST['method'] == "insert_comment"){
    insert_comment();
}

if($_POST['method'] == "get_comments"){
    get_comments();
}
if($_POST['method'] == "get_comment_single_serv"){
    get_comment_single_serv();
}

?>