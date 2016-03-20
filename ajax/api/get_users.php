<?php 

$con = mysqli_connect('localhost', 'root', '', 'db_product_listing');


$sql = "SELECT * FROM users";

$result = mysqli_query($con, $sql);

$output = array();

while($row = mysqli_fetch_assoc($result)){
 
  array_push($output, $row);
}

echo json_encode($output);

?>