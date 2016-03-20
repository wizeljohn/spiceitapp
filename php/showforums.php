<?php 
header('Access-Control-Allow-Origin:*');
include('config.php');

$sql= "SELECT * FROM tbl_forums";

$result = mysqli_query($con, $sql);
if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
      	echo '<div class="panel panel-default">';
		  echo '<div class="panel-heading">'.$row['fld_topic'].'</div>';
		  echo '<div class="panel-body">';
			  echo "<p>User: ".$row["fld_username"]."</p></center>";
			  echo '<center><img src="'.$row['fld_image'].'" style="width:60px; height:60px;"></center>';
			  echo "<p>Ingredients: ".$row["fld_content"]."</p></center>";
			  echo '</div>';
		echo'</div>';
		
	}

}
else{

	echo "No Record Found";
}



?>