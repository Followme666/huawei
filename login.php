<?php
header("content-type:text/html;charset=utf-8");
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	//echo $username,$userpwd;
	$db = mysql_connect("localhost","root","root");
	//选择数据库
	mysql_select_db("db1819",$db);
	mysql_query("set names utf8");
	
	//处理数据
	$sql = "SELECT * FROM `user` WHERE `uname`='$username'";
	$res = mysql_query($sql);
	//执行select查询，返回一个资源类型通过mysql_feych_array()得到资源类型
	$arr = mysql_fetch_array($res);
	//判断用户名是否存在
	if($arr){
		//存在验证密码
		if($userpwd == $arr["upwd"]){
			echo "<script>alert('登陆成功');location.href='showPage.html';</script>";			
		}else{
			echo "<script>alert('密码错误');location.href='login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在');location.href='login.html';</script>";
	}
	
?>