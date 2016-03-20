<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);

mysqli_select_db($conn, "db_spiceitapp");
$name=$_POST['content'];
$mytext=$_POST['topic'];
$image=$_POST['image_URL'];

$sql = "INSERT INTO tbl_recipe (fld_id, fld_recipename, fld_picture, fld_mytext) VALUES (NULL, '".$name."', '".$image."', '".$mytext."')";
$result = mysqli_query($conn, $sql);
if($result){
	echo "yes";
}
?>