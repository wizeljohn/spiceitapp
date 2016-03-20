<?php 

include 'ak_php_img_lib_1.0.php';

for($i = 0; $i < $_POST['file_count']; $i++){
	
	$name_array = $_FILES['file' . $i]['name'];
	$tmp_name_array = $_FILES['file' . $i]['tmp_name'];
	$type_array = $_FILES['file' . $i ]['type'];
	$size_array = $_FILES['file' . $i]['size'];
	$error_array = $_FILES['file' . $i]['error'];

	$kaboom = explode(".", $name_array); // Split file name into an array using the dot
	$fileExt = end($kaboom); // Now target the last array element to get the 

	if(move_uploaded_file($tmp_name_array, "test_uploads/".$name_array)){

						// ---------- Include Universal Image Resizing Function --------
		$target_file = "test_uploads/$name_array";
		$resized_file = "uploads/$name_array";
		$wmax = 200;
		$hmax = 150;
		ak_img_resize($target_file, $resized_file, $wmax, $hmax, $fileExt);
		// ----------- End Universal Image Resizing Function -----------

	} else {
		//error here
	}


}

?>

