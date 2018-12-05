	var oForm = document.querySelector("form");
	//验证手机号
	var flagTel = null;
	$id("tx1").onblur = function(){
		var reg = /^1(3|5|8)\d{9,}/;
		var str = this.value;
		if(reg.test(str)){
			$id("s1").innerHTML = "ok";
			$id("s1").style.color = "red";
			flagTel = true;
		}else{
			$id("s1").innerHTML = "15  13  18 开头";
			$id("s1").style.color = "red";
			flagTel = false
		}
	}
	//验证密码
	var flagPwd = null;
	$id("pwd").onblur = function(){
			var regNum = /^\d+$/;
			var regLetter = /^[a-z]+$/i;
			var regChar = /^[!@#$%^&*]+$/;
			var _regNum = /^\d+$/;
			var _regLetter = /[a-z]+$/i;
			var _regChar = /[!@#$%^&*]+/;
			var str = this.value;
			if(str.length<6 || str.length>18){
				$id("s3").innerHTML = "密码长度在6-18位";
				$id("s3").style.color = "red";
			}else if(regNum.test(str) || regLetter.test(str) || regChar.test(str)){
				$id("s3").innerHTML = "密码强度弱";
				$id("s3").style.color = "red";
				flagPwd = true;
			}else if(_regNum.test(str) && _regLetter.test(str) && _regChar.test(str)){
				$id("s3").innerHTML = "密码强度高";
				$id("s3").style.color = "red";
				flagPwd = true;
			}else{
				$id("s3").innerHTML = "密码强度中";
				$id("s3").style.color = "red";
				flagPwd = true;
			}		
	}
	//确认密码
	var flagQpwd = null;
	$id("que").onblur = function(){
		var str2 = $id("pwd").value;
		var str = this.value;
		if(str == str2){
			$id("s4").innerHTML = "正确";
			$id("s4").style.color = "red";
				flagQpwd = true;
		}else{
			$id("s4").innerHTML = "两次输入不一致";
			$id("s4").style.color = "red";
			flagQpwd = false;
		}
	}
	oForm.onsubmit = function(){
		if(flagTel && flagPwd && flagQpwd){
			return true;
		}else{
			return false;
		}
	}
	
	$id("tx1").onfocus = function(){
			$id("tx1").value="";
		}
	$id("pwd").onfocus = function(){
			$id("pwd").value="";
		}
	$id("que").onfocus = function(){
			$id("que").value="";
		}
	$id("yz").onfocus = function(){
			$id("yz").value="";
		}
	
	