<?php
include("connect.php");

function insert_user(){
    //create info for users
    global $db;
    
    $query = "INSERT INTO users (username, password, firstname, lastname, email, address, city, profileimg) VALUES ('".$_POST['username']."', '".$_POST['password']."', '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['email']."', '".$_POST['address']."', '".$_POST['city']."', '".$_POST['profileimg']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
}

function user_logged_in(){
    global $db;
    
    $query = "SELECT user_id FROM users WHERE username = '".$_POST['username']."' AND password = '".$_POST['username']."'";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
}

function get_users(){
    //read info for users; get the users by id: when you click on the img, you do a select in the db to grab their info where id is equal to what is clicked on
    global $db;
    
    $query = "SELECT * FROM users";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}

function update_user(){
    //create info for users
    global $db;
    
    $query = "UPDATE users (username, password, firstname, lastname, email, address, city, profileimg) SET users  ('".$_POST['username']."', '".$_POST['password']."', '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['email']."', '".$_POST['address']."', '".$_POST['city']."', '".$_POST['profileimg']."')";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
}

function delete_user(){
    //delete the usernames
    global $db;
    $query = "DELETE FROM users WHERE user_id = ".$_POST['user_id']."";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

?>