<?php
include("connect.php");

function insert_service(){
    //create info for users
    global $db;
    
    $query = "INSERT INTO services (serv_type, serv_desc, serv_price, serv_area, user_id) VALUES ('".$_POST['type']."', '".$_POST['desc']."', '".$_POST['price']."', '".$_POST['area']."', '".$_POST['user_id']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
}

function get_service(){
    //read info for users; get the users by id: when you click on the img, you do a select in the db to grab their info where id is equal to what is clicked on
    global $db;
    
    $query = "SELECT * FROM users";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}

function update_service(){
    //create info for users
    global $db;
    
    $query = "UPDATE users (username, password, firstname, lastname, email, address, city, profileimg) SET users  ('".$_POST['username']."', '".$_POST['password']."', '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['email']."', '".$_POST['address']."', '".$_POST['city']."', '".$_POST['profileimg']."')";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
}

function delete_service(){
    //delete the usernames
    global $db;
    $query = "DELETE FROM users WHERE user_id = ".$_POST['user_id']."";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

?>