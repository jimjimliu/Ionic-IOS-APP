<?php

header("Access-Control-Allow-Origin: *");
//connection
include "../connection/connection.php";
include "../common/utils.php";
//start session
session_start();
header('content-type: application/json');

$DATA = get_post_data();
$email = $DATA['email'];

$sql = "select sum(watts) as sum, country from user_info where user_email='test10@test.com' group by country ;";
    $result = $conn->query($sql);
    $array = array();
    
    while($user = $result->fetch_array()){
        $array = array_push_assoc($array, $user[1], $user[0]);//push into an associative array;
    }

//print_r($array);

if ($array) {
    
    echo response_data($array);
} else {
    echo response_message("User not exists");
}
    
function array_push_assoc($array, $key, $value){
    $array[$key] = $value;
    return $array;
}


?>
