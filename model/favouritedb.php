<?php
include("connect.php");

function insert_favourite(){
    global $db;
    
    $query = "INSERT INTO favourites (serv_id, user_id) VALUES ('".$_POST['serv_id']."', '".$_POST['user_id']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
    $data = array("status" => "success", "msg" => "favourite inserted");
    echo json_encode($data, JSON_FORCE_OBJECT);
}

function get_user_favourite(){
    global $db;

    $query = "SELECT services.serv_id, services.serv_type, services.serv_desc, services.serv_price, services.serv_area FROM services INNER JOIN favourites ON services.serv_id = favourites.serv_id AND favourites.user_id = '".$_POST['user_id']."'";

    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}

function delete_favourite(){
    global $db;
    $query = "DELETE FROM favourites WHERE user_id = '".$_POST['user_id']."' AND serv_id = '".$_POST['serv_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}



?>