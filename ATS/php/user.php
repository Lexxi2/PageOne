<?php 
if(isset($_POST['username'])){
	$string = "alexa admin abcd Clara Silvia Beat Karl Peter Lars";
	$un = htmlspecialchars($_POST['username']);
	if(stripos($string,$un)==true) echo trim("false");
		else echo trim("true");
}
else die
?>
