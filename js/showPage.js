	//回到顶部
	$(".ding i").mouseenter(function(){
		$(this).css("color","#000000")
		$(this).next().css("display","block")
	})
	$(".ding i").mouseleave(function(){
		$(this).css("color","")
		$(this).next().css("display","none")
	})
	$(".ding i").eq(3).click(function(){
		$("html,body").animate({scrollTop:0},1000);
	})
	//第一个下拉菜单
	
	$(".yiR li:has(div)").mouseenter(function(e){
		e.stopPropagation();
		$(this).children("div").stop().slideDown(800);
		$(this).css("background","white")
	})
	$(".yiR li:has(div)").mouseleave(function(e){
		e.stopPropagation();
		$(this).children("div").stop().slideUp(500);
		$(this).css("background","")
	})
	//tab选项卡
	//移入
	$(".banner-tab>li" ).mouseenter(function(){
		$(this).children("a").children("p").css({
			"background" : "write",
			"color" :"red"		
		})
		$(this).children("a").children("p").next().css({
			"background" : "write",
			"color" :"black"			
		})
		$(this).find("div").stop().fadeIn(1000)
	})
	//移出
	$(".banner-tab>li" ).mouseleave(function(){
		$(this).children("a").children("p").css({
			"background" : "",
			"color" :""
		})
		$(this).find("div").stop().fadeOut(500)
	})
	//banner 轮播图
	var timer = null;
		index = 0;
		$ulist = $(".banner-one li");
		$olist = $(".olist li");
		timer = setInterval(autoPlay,2000);
		function autoPlay(){
			index++;
			if(index == $ulist.size()){
				index = 0;
			}
			$olist.eq(index).addClass("current").siblings().removeClass("current");
			$ulist.eq(index).fadeIn(1200).siblings().fadeOut(1200);
		}
		$olist.mouseenter(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			autoPlay();
		})
		$olist.mouseleave(function(){
			timer = setInterval(autoPlay,2000);
		})
		//第二个轮播图
		var timer2 = null;
			index2 = 0;
			$ulist2 = $(".banner2 ul li");
			$olist2 = $(".olist2 li");
			timer2 = setInterval(autoPlay2,2000);
		function autoPlay2(){
			index2++;
			if(index2 == $ulist2.size()){
				index2 = 0;
			}
			$olist2.eq(index).addClass("banner2-o").siblings().removeClass("banner2-o");
			$ulist2.eq(index).fadeIn(2000).siblings().fadeOut(2000);
		}
		$olist2.mouseenter(function(){
			clearInterval(timer2);
			index2 = $(this).index()-1;
			autoPlay2();
		})
		$olist2.mouseleave(function(){
			timer2 = setInterval(autoPlay2,2000);
		})
		//底部小图标
		$(".over-the4 i").mouseenter(function(){
			$(this).css("color","#a4a4a4")
		})
		$(".over-the4 i").mouseleave(function(){
			$(this).css("color","")
		})
		//底部二维码
		$(".ma2").mouseenter(function(){
			$(".ma").css("display","block")
		})
		$(".ma2").mouseleave(function(){
			$(".ma").css("display","none")
		})
