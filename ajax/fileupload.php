<?php

include 'ak_php_img_lib_1.0.php';

$fileName = $_FILES["file1"]["name"]; // The file name
$fileTmpLoc = $_FILES["file1"]["tmp_name"]; // File in the PHP tmp folder
$fileType = $_FILES["file1"]["type"]; // The type of file it is
$fileSize = $_FILES["file1"]["size"]; // File size in bytes
$fileErrorMsg = $_FILES["file1"]["error"]; // 0 for false... and 1 for true

$kaboom = explode(".", $fileName); // Split file name into an array using the dot
$fileExt = end($kaboom); // Now target the last array element to get the 

if (!$fileTmpLoc) { // if file not chosen
    echo "ERROR: Please browse for a file before clicking the upload button.";
    exit();
}
if(move_uploaded_file($fileTmpLoc, "test_uploads/$fileName")){
	    echo $fileName;
} else {
//    echo "move_uploaded_file function failed";
}

//unlink($fileTmpLoc); // Remove the uploaded file from the PHP temp

//header('Content-type:application/json');
	
	// ---------- Include Universal Image Resizing Function --------
$target_file = "test_uploads/$fileName";
$resized_file = "uploads/$fileName";
$wmax = 200;
$hmax = 150;
ak_img_resize($target_file, $resized_file, $wmax, $hmax, $fileExt);
// ----------- End Universal Image Resizing Function -----------

?>

