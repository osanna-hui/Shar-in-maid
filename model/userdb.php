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
    
    $query = "SELECT * FROM users WHERE username = '".$_POST['username']."' AND password = '".$_POST['password']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function get_users(){
    global $db;
    
    $query = "SELECT * FROM users";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}

/*function view_profile(){
    global $db;
    //$query = "SELECT * FROM users where user_id = 2";
    $query = "SELECT * FROM users where user_id = ".$_POST['user_id']."";
    echo $query;
    //$query = "SELECT users.username, users.password, users.firstname, users.lastname, users.email, users.address, users.city FROM users WHERE user_id = users.user_id";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}*/

function update_user(){
    //create info for users
    global $db;
    
    $query = "UPDATE users SET username = '".$_POST['username']."', password = '".$_POST['password']."', firstname = '".$_POST['firstname']."', lastname = '".$_POST['lastname']."', email = '".$_POST['email']."', address = '".$_POST['address']."', city = '".$_POST['city']."', profileimg = '".$_POST['profileimg']."' WHERE user_id = '".$_POST['user_id']."'";
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