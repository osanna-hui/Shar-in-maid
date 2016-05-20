<?php
include("connect.php");

function insert_comment(){
    //create info for users
    global $db;
    
    $query = "INSERT INTO comments (text, serv_id, user_id) VALUES ('".$_POST['text']."', '".$_POST['serv_id']."', ".$_POST['user_id'].")";
    $result = $db->query($query);
    echo $query;
}

function get_comments(){
    //read info for users
    global $db;
    $query = "SELECT comments.id, comments.text, users.username,
                FROM messages
                LEFT JOIN users ON users.id = comments.user_id,
                LEFT JOIN users ON serv.id = comments.serv_id";
    
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
    
}

function get_comment_single_serv(){
    global $db;
    $query = "SELECT * FROM comments WHERE serv_id = '".$_POST['serv_id']."'";
    
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
    
}

function update_comment(){
    //update comment for user
    global $db;
    
    $query = "UPDATE comments (text, user_id, serv_id) SET comments ('".$_POST['text']."', '".$_POST['user_id']."', ".$_POST['serv_id'].")";
    $result = $db->query($query);
}

function delete_comment(){
    //delete info for user
       global $db;
    $query = "DELETE FROM comments WHERE comm_id = ".$_POST['comm_id']."";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

?>