	//第一个下拉菜单
	
	$(".yiR li:has(div)").mouseenter(function(e){
		e.stopPropagation();
		$(this).children("div").stop().show(800);
		$(this).$("li").css("background","white")
	})
	$(".yiR li:has(div)").mouseleave(function(e){
		e.stopPropagation();
		$(this).children("div").stop().hide(500);
	})
