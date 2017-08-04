$(document).ready(function() {
	/*请求分离出去的头部尾部侧边栏*/
	$(".aside").load("../html/common.html .aside");
	$("#header").load("../html/common.html #header", function() {
		/*登录注册*/
		var flag = true;

		$(".login a:first-child,.login-em").click(function() {
			$("#login-outer").show().siblings($(".login-page")).show();
			$(".login-content,.register-common,.pian a:first-child,.register-vip").hide();
			$(".login-code,.login-tip").show();
			$(".login-sec a:first-child").html("普通会员登录");
			$(".login-sec a:last-child").html("批发会员登录");
			$(".login-page").css({ "height": "360px" })
			flag = true;
		})
		$(".login-page i,#login-outer").click(function() {
			$("#login-outer").hide().next($(".login-page")).hide();
			$(".register-common,.register-vip").hide();
			$(".login-code").show().next($(".login-content")).hide();
			$(".login-tip").show();
		})
		$(".pian a:first-child").click(function() {
			$(".login-code").show().next($(".login-content")).hide();
			$(".login-sec a:nth-child(1)").addClass("cur").siblings().removeClass("cur");
			$(".pian a:first-child,.register-vip").hide();
		})
		$(".login-code li:last-child").click(function() {
			$(".pian a:first-child").show();
			$(".login-code").hide().next($(".login-content")).show();
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".login-content").show();
		})

		$(".login-tip .cur,.login a:last-child").click(function() {
			$(".login-sec a:nth-child(1)").addClass("cur").siblings().removeClass("cur");
			$(".login-page").css({ "height": "390px" })
			$("#login-outer").show().siblings($(".login-page")).show();
			$(".login-code,.login-tip,.login-content").hide();
			$(".login-sec a:first-child").html("普通会员注册");
			$(".login-sec a:last-child").html("批发会员注册");
			$(".register-common").show();
			$(".register-vip").hide();
			flag = false;
		})
		$(".login-sec a:nth-child(1)").click(function() {
			if(flag) {
				$(".pian a:first-child,.pian a:nth-child(4)").show();
				$(this).addClass("cur").siblings().removeClass("cur")
				$(".login-content").show();
				$(".login-code,.register-common").hide();
			} else {
				$(".login-content").hide();
				$(".register-vip").hide();
				$(".register-common").show();
			}
			$(this).addClass("cur").siblings().removeClass("cur")
		})
		$(".login-sec a:nth-child(2)").click(function() {
			if(flag) {
				$(".pian a:nth-child(1),.pian a:nth-child(4),.register-common").hide();
			} else {
				$(".register-common").hide();
				$(".register-vip").show();
				$(".login-page").css({ "height": "650px" })
				$(".login-sec").css({ "margin-top": "50px" })
			}
			$(this).addClass("cur").siblings().removeClass("cur");
		})

		/*导航栏点击切换*/
		$(".ladies").click(function() {
			$(".men,.prolist-cosmestic").hide();
			$(".women,.aside").show();
			$(this).find("a").addClass("cur").end().siblings("li").find("a").removeClass("cur")
		})
		$(".man").click(function() {
			$(".women,.prolist-cosmestic").hide();
			$(".men,.aside").show()
			$(this).find("a").addClass("cur").end().siblings("li").find("a").removeClass("cur")
		})
		$(".cosmestic").click(function() {
			$(".women,.men,.aside").hide();
			$(".prolist-cosmestic").show();
			$(this).find("a").addClass("cur").end().siblings("li").find("a").removeClass("cur")
		});

	});
	
	/*引入尾部*/
	$("#guarantee").load("../html/common.html #guarantee");
	$(".bottom").load("../html/common.html .bottom");


	/*引入美妆区导航栏*/
	$(".cosmestic-nav").load("../html/common.html .prolist-cosmestic");
	
	
	
	
	/*动态生成页面数据*/

	$(window).load(function() {
		$.ajax({
			type: "GET",
			url: "../json/index.json",
			success: function(data) {
				var html1 = html2 = html3 = html4 = "";
				for(var i = 3; i < 6; i++) {
					html1 += "<li><a href='productionList.html?id=" + data[i].id + "'><img src='" + data[i].src + "'><i></i><em><span>" + data[i].details + "</span><span>" + data[i].name + "</span><span>" + data[i].price + "</span></em></a></li>"
				}
				$(".pro1").html(html1);
				for(var i = 7; i < 10; i++) {
					html4 += "<li><a href='productionList.html?id=" + data[i].id + "'><img src='" + data[i].src + "'><i></i><em><span>" + data[i].details + "</span><span>" + data[i].name + "</span><span>" + data[i].price + "</span></em></a></li>"
				}
				$(".teman").html(html4);
				for(var i = 6; i < 9; i++) {
					html2 += "<li><a href='productionList.html?id=" + data[i].id + "'><img src='" + data[i].src + "'><i></i><em><span>" + data[i].details + "</span><span>" + data[i].name + "</span><span>" + data[i].price + "</span></em></a></li>"
				}
				$(".pro2").html(html2);
				for(var i in data) {
					html3 += "<li><a class='pic' href='productionList.html?id=" + data[i].id + "'><img src='" + data[i].src + "'></a><p class='gicon'><span class='iconfont'>&#xe643;</span></p><p class='title'><a href='productionList.html?id=" + data[i].id + "'>" + data[i].details + "</a></p><p class='name'><a href='productionList.html?id=" + data[i].id + "'>" + data[i].name + "</a></p><p class='amount'>" + data[i].price + "</p></li>"
				}
				$(".t1").html(html3);
				html3 += html3;
				$(".t2").html(html3);
			}
		})

		//轮播图

		$(".playBox").slider({ showNav: true, showBtns: true, height: 500, width: 2000, interval: 5000 })
		$(".screenBox").hover(function() {
			$(".sliderBtns span").eq(0).stop().animate({ "left": "30px" }, 300)
			$(".sliderBtns span").eq(1).stop().animate({ "right": "30px" }, 300)
		}, function() {
			$(".sliderBtns span").eq(0).stop().animate({ "left": "-30px" }, 300)
			$(".sliderBtns span").eq(1).stop().animate({ "right": "-30px" }, 300)
		})
		
		
		
		

	})

})