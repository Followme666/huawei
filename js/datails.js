	//固定栏
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
	//标题栏固定
	$(function(){
		var nav = $(".nav-two");
		var win = $(window);
		var sc = $(document);
		win.scroll(function(){
			if(sc.scrollTop()>=785){
				nav.addClass("fixed1");
				
			}else{
				nav.removeClass("fixed1");
				
			}
		})
	})
	//放大镜效果
	$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).stop().fadeIn().siblings("img").fadeOut();
		$("#big img").eq(index).stop().fadeIn().siblings("img").fadeOut();
//		$("#bottom img").eq(index).addClass("bottom1").siblings("img").removeClass("bottom1")
	})
	
	$("#small").on({
		"mouseover":function(){
			$("#big").stop().fadeIn();
			$("#mask").stop().fadeIn();
			
		},
		"mouseout":function(){
			$("#big").stop().fadeOut();
			$("#mask").stop().fadeOut();
		},
		"mousemove":function(evt){
			var e = evt || event;
			var x = e.pageX - $("#small").offset().left - $("#mask").width()/2;
			var y = e.pageY - $("#small").offset().top - $("#mask").height()/2;
			
			var mx = $("#small").width() - $("#mask").width();
			var my = $("#small").height() - $("#mask").height();
			
			//边界处理
			x = x<=0? 0 : x>=mx ? mx : x;
			y = y<=0? 0 : y>=my ? my : y;
			
			//大图移动距离
			var bigImageX = -x * $("#big img").width() / $("#small").width();
			var bigImageY = -y * $("#big img").height() / $("#small").height();
			$("#mask").css({
				"left":x + "px",
				"top":y + "px"
			})
			$("#big img").css({
				"left":bigImageX + "px",
				"top":bigImageY + "px"
			})
		}
	})
	$("#add1").click(function(){
		$("#shopAdd").show();
	})
	$("span").click(function(){
		$("#shopAdd").hide();
	})