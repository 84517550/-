<?php
require('./denglulianjie.php');

//书写sql语句
$sql = "CREATE TABLE info (
            id int(11) NOT NULL AUTO_INCREMENT NOT NULL PRIMARY KEY,
			username VARCHAR(300) NOT NULL,
			password VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>