<?php
header("content-type:text/html;charset=utf-8");
//接收客服请求的数据
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	//echo $username,$userpwd;
	$db = mysql_connect("localhost","root","root");
	//选择数据库
	mysql_select_db("db1819",$db);
	mysql_query("set names utf8");
	//编写
	$sql = "insert into user(`uname`,`upwd`) values('$username','$userpwd')";
	//执行
	$row = mysql_query($sql);
	if($row){
		echo "<script>alert('注册成功');location.href='login.html';</script>";
	}else{
		echo "<script>alert('注册失败');location.href='register.html';</script>";
	}
?>