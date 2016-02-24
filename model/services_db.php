<?php
include("./connect.php");

function insert_services(){
    global $db;
    $query = "INSERT INTO services (serv_type, serv_desc, serv_price, serv_area, user_id) VALUES ('".$_POST['type']."', '".$_POST['desc']."', '".$_POST['price']."', '".$_POST['area']."', ".$_POST['user_id']." )";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function get_services(){
    global $db;
    //(SELECT COUNT(*) FROM likes WHERE likes.message_id = messages.id) AS numLikes
    //this line selects new query within a query
    //AS = remaining the key that comes out
    //this is called = select in select in sql
     $query = "SELECT services.id, services.type, services.desc, services.price, services.area, users.username, users.profileimg,
                FROM services
                LEFT JOIN users ON users.user_id = services.user_id";

                //(SELECT COUNT(*) FROM likes WHERE likes.message_id = messages.id) AS numLikes

     $result = $db->query($query);
     echo json_encode($result->fetchAll());
}

function update_services(){
    global $db;
    $query = "UPDATE services SET serv_type, serv_desc, serv_price, serv_area WHERE serv_type = '".$_POST['type']."', serv_desc = '".$_POST['type']."', serv_price = '".$_POST['type']."', serv_area = '".$_POST['type']."'";
     $result = $db->query($query);
     echo json_encode($result->fetchAll());
}

function delete_services(){
    global $db;
    $query = "DELETE FROM services WHERE serv_id = '".$_POST['serv_id']."' ";
     $result = $db->query($query);
     echo json_encode($result->fetchAll());
    
}



?>