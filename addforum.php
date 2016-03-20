<?php
header('Access-Control-Allow-Origin :*');
$con = mysqli_connect("localhost", "root", "","spiceitapp");

	// "file" name of image file.. 
	$file=$_FILES['image']['tmp_name'];
	$image=addslashes(file_get_contents($_FILES['image']['tmp_name']));
	$image_name=addslashes($_FILES['image']['name']);

	// "image" name of folder or path for the image 		
	move_uploaded_file($_FILES["image"]["tmp_name"],"images/".$_FILES["image"]["name"]);
	$location='images/'.$_FILES['image']['name'];

			$username = $_POST['txtUser'];
			$topic = $_POST['txtTopic'];
			$content= $_POST['txtContent'];

			$qry="INSERT INTO tbl_forums(fld_id, fld_username, fld_image, fld_content, fld_topic) 
			VALUES (NULL,'".$username."','".$location."','".$content."','".$topic."')";
			
			$flag = mysqli_query($con,$qry);
			
			if($flag){
				echo "i will graduate";
			}
			else {
				echo "Oops, something went wrong!";
			}			
?>





