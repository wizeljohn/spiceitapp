<?php
header('Access-Control-Allow-Origin: *');

//set database access
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);


//select database
mysqli_select_db($conn, 'db_spiceitapp');

//setting sql from table
$sql = "SELECT * FROM tbl_recipe";

//getting data
$result = mysqli_query($conn, $sql);

//get data in every row in database
	if(mysqli_num_rows($result) > 0){
		while($rows = mysqli_fetch_assoc($result)){
		echo "<br><br><div class='container'><div class='well'><center><h3>".$rows['fld_mytext']."</h3></center><hr><div class='row'><img src='ajax/uploads/".$rows['fld_picture']."' width='200' height='200' class='img-thumbnail col-xs-4' /><h4 class='col-xs-8'>".$rows['fld_recipename']."</h4></div></div></div>";
		}	
	}		
	else {
		echo "No record found!";
	}
?>
