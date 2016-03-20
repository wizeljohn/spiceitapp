<?php
header('Access-Control-Allow-Origin:*');
include('config.php');
$username = $_GET['txtUsername'];
$password = $_GET['txtPassword'];

if($username && $password){
		$sql = "SELECT * FROM tbl_user WHERE fld_userName='".$username."' AND fld_userPassword ='".$password."' ";
		$result = mysqli_query($con, $sql);
			if(mysqli_num_rows($result)){
				echo 'yes';
			}
			else{
				echo 'Wrong';
			}
		}
?>
