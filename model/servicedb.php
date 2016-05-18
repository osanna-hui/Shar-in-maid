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
    
    $query = "SELECT services.serv_id, services.serv_type, services.serv_price FROM services";
    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}
function view_one_service(){
    global $db;
    $query = "SELECT services.serv_id, services.serv_type, services.serv_desc, services.serv_price, services.serv_area, users.user_id, users.username, users.firstname, users.lastname, users.email, users.profileimg FROM services INNER JOIN users ON services.user_id = users.user_id AND services.serv_id = '".$_POST['serv_id']."'";

    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}
function get_user_service(){
    global $db;
    $query = "SELECT services.serv_id, services.serv_type, services.serv_desc, services.serv_price, services.serv_area, users.username FROM services INNER JOIN users ON services.user_id = users.user_id AND users.user_id = '".$_POST['user_id']."'";

    $result = $db->query($query);
    
    echo json_encode($result->fetchAll());

}


function update_service(){
    global $db;
    
    $query = "UPDATE services SET serv_type = '".$_POST['new_type']."', serv_desc = '".$_POST['new_desc']."', serv_price = '".$_POST['new_price']."', serv_area = '".$_POST['new_area']."'  WHERE serv_id = '".$_POST['serv_id']."' ";

    //$query = "UPDATE services (serv_type, serv_desc, serv_price, serv_area) SET services ('".$_POST['new_type']."', '".$_POST['new_desc']."', '".$_POST['new_price']."', '".$_POST['new_area']."' WHERE serv_id = '".$_POST['serv_id']."' ";

    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function delete_service(){
    //delete the usernames
    global $db;
    $query = "DELETE FROM services WHERE serv_id = '".$_POST['serv_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

?>