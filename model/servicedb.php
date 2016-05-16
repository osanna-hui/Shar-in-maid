<?php
include("connect.php");

function insert_service(){
    //create info for users
    global $db;
    
    $query = "INSERT INTO services (serv_type, serv_desc, serv_price, serv_area, user_id) VALUES ('".$_POST['type']."', '".$_POST['desc']."', '".$_POST['price']."', '".$_POST['area']."', '".$_POST['user_id']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
    $data = array("status" => "success", "msg" => "service inserted");
    echo json_encode($data, JSON_FORCE_OBJECT);
}

function get_service(){
    //read info for users; get the users by id: when you click on the img, you do a select in the db to grab their info where id is equal to what is clicked on
    global $db;
    
    $query = "SELECT services.serv_id, services.serv_type, services.serv_desc, services.serv_price, services.serv_area, users.username FROM services LEFT JOIN users ON services.user_id = users.user_id";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}

function update_service(){
    //create info for users
    global $db;
    
    $query = "UPDATE services (serv_type, serv_desc, serv_price, serv_area, user_id) SET services ('".$_POST['type']."', '".$_POST['desc']."', '".$_POST['price']."', '".$_POST['area']."', '".$_POST['user_id']."')";

    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());
}

function delete_service(){
    //delete the usernames
    global $db;
    $query = "DELETE FROM services WHERE serv_id = ".$_POST['serv_id']."";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

?>