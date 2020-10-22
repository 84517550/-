<?php
// $arr=array(1,2,3);
// $arr1=array("name"=>"haha","age"=>18);
// print_r($arr1);
header("content-type:text/html;charset=utf-8;");
$link=mysqli_connect("127.0.0.1","root","root","user");
// $cha=mysqli_query($link, "select * from  `info` where  `username`=123123 and `password`=123123 ");
// $lass=mysqli_fetch_assoc($cha);
// $jia=mysqli_query($link,"insert into info values (null,'qweqwe','qweqwe' )");
// $gai=mysqli_query($link,"update info set  username='666' , password='666'  where  username=0 ");
$shan=mysqli_query($link,"delete from info where username='666'");
if($shan){
    setcookie("name","haha",time()+7*24*60*60);
    echo json_encode(array(`code`=>1));
    // print_r(array("name"=>"xixi")) ;
}else{
    echo false;
}

?>