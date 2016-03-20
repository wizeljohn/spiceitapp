<?php
header('Access-Control-Allow-Origin: *');

//set database access
$servername = "localhost";
$username = "";
$password = "";
$conn = mysqli_connect($servername, $username, $password);


//select database
mysqli_select_db($conn, 'db_spiceitapp');
$user = $_GET['txtUsername'];
$pass = $_GET['txtPassword'];
//setting sql from table
$sql = "SELECT * FROM tbl_user WHERE fld_username = '".$user."' AND fld_password = '".$pass."' ";

//getting data
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0) {
				echo "yes";
			}
			else{
				echo "no";
			}

?>


