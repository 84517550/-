<?php
include "./base.php";
$name=$_POST["name"];
$word=$_POST["word"];
$a=mysqli_connect("127.0.0.1","root","root","user");
$b=mysqli_query($a,"insert into `info` values (null,'$name','$word')");
if($b){
	echo "true";
}else{
	echo "false";
}
mysqli_close($a);
?>