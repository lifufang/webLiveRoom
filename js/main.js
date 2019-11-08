function setSize() {
	var windowH = $(window).innerHeight();
	var wrapperW = $(".wrapper").innerWidth();
	var shaoshaoH = $(".shaoshao").outerHeight();
	var participentsWrapH = windowH - shaoshaoH - 471;
	$(".participentsWrap").height(participentsWrapH);
	var leftMainW = $(".left-part").outerWidth();
	var mainW = wrapperW - leftMainW - 0.5;
	$(".main").css("width", mainW + "px");
	var mainRightW = $(".mainRight").outerWidth();
	var mainLeftW = mainW - mainRightW - 1;
	$(".mainLeft").css("width", mainLeftW + "px");
	var vedioWrapH = windowH - 345;
	$(".vedioWrap").css("height", vedioWrapH + "px");
	var chatRoomH = windowH - 347;
	$(".chatRoom").css("height", chatRoomH + "px")
}
$(document).ready(function() {
	setSize()
});
$(window).on("resize",
function() {
	setSize()
});
function getScroll1(obj) {
	obj.niceScroll({
		cursorcolor: "#0a2f48",
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "8px",
		cursorborder: "0",
		cursorborderradius: "5px",
		autohidemode: false,
		scrollspeed: 100
	})
}
function getScroll2(obj) {
	obj.niceScroll({
		cursoropacitymax: 1,
		touchbehavior: false,
		cursorwidth: "0px",
		cursorborder: "0px",
		cursorborderradius: "0px",
		autohidemode: true,
		scrollspeed: 100
	})
}
function setScroll(obj, n) {
	switch (n) {
	case 0:
		getScroll1(obj);
		break;
	case 1:
		getScroll2(obj);
		break
	}
}
setScroll($(".participents"), 0);
setScroll($("body"), 1);
setScroll($(".informContUl"), 0);
setScroll($(".mentorView"), 0);
setScroll($(".chatRomUl"), 0);
setScroll($("textarea"), 0);
$(".scheduleUl").niceScroll({
	cursorcolor: "#c6c6c6",
	cursoropacitymax: 1,
	touchbehavior: false,
	cursorwidth: "8px",
	cursorborder: "0",
	cursorborderradius: "0px",
	autohidemode: false,
	scrollspeed: 100
});
var admin;
function adminBolFn() {
	if (!admin) {
		$(".writeDiv").addClass("writeDiv_state2");
		$(".functionDiv").addClass("functionDiv_state2");
		$(".changeText").hide();
		$(".controlDiv").hide();
		$(".zhuli").show();
		$(".remind").width(80);
		$(".stop").hide();
		$(".inform-close").hide();
		$(".mentorViewclosed").hide()
	} else {
		$(".writeDiv").removeClass("writeDiv_state2");
		$(".functionDiv").removeClass("functionDiv_state2");
		$(".controlDiv").show();
		$(".changeText").show();
		$(".zhuli").hide();
		$(".remind").width(218);
		$(".stop").show();
		$(".inform-close").show();
		$(".mentorViewclosed").show()
	}
}
var fnidx = null;
function changeFunFn(n) {
	switch (n) {
	case 0:
		changeBtnFn(0);
		fnidx = 0;
		break;
	case 1:
		changeBtnFn(1);
		fnidx = 1;
		break;
	case 2:
		changeBtnFn(2);
		fnidx = 2;
		break
	}
}
function changeBtnFn(n) {
	$(".controlDiv p").find("a").eq(n).addClass("a_active").siblings().removeClass("a_active");
	$(".controlDiv p").find("a").eq(n).find("span").addClass("span_active2").end().siblings().find("span").removeClass("span_active2")
}
$(".informTilte > span").on("click",
function() {
	$(this).addClass("span_active").siblings().removeClass("span_active");
	$(".informCont").children().eq($(this).index()).show().siblings().hide()
});
function showBox(obj) {
	obj.on("click",
	function(event) {
		if (event.stopPropagation) {
			event.stopPropagation()
		} else {
			window.event.cancelBubble = true
		}
		$(this).find("div").show();
		$(this).siblings().find("div").hide()
	});
	obj.find("div").on("click",
	function(event) {
		if (event.stopPropagation) {
			event.stopPropagation()
		} else {
			window.event.cancelBubble = true
		}
	});
	$(".wrapper").on("click",
	function(event) {
		obj.find("div").hide()
	})
}
showBox($(".sendFace"));
showBox($(".sendCandiao"));
showBox($(".changeText"));
$(".faceBox li").each(function() {
	$(this).on("click",
	function() {
		var retext = $("textarea").val();
		var imgtext = $(this).find("img").attr("title");
		var newtext = retext + imgtext;
		$("textarea").val(newtext);
		$(".faceWrap").hide();
		$("textarea").focus()
	})
});
$(".setTextColor ul").find("li").each(function() {
	$(this).on("click",
	function() {
		color = $(this).css("color");
		$(this).css("border", "1px solid #ff9b1a").siblings().css("border", "1px solid #000000")
	})
});
$(".setTextSize ul").find("li").on("click",
function() {
	var i = $(this).index();
	switch (i) {
	case 0:
		fontSize = "13px";
		lineheight = "20px";
		break;
	case 1:
		fontSize = "15px";
		lineheight = "24px";
		break;
	case 2:
		fontSize = "18px";
		lineheight = "30px";
		break
	}
	$(this).css("border", "1px solid #000000").siblings().css("border", "1px solid #cecece")
});
var minebol;
function showSayToHim(event, obj) {
	if (event.stopPropagation) {
		event.stopPropagation()
	} else {
		window.event.cancelBubble = true
	}
	if (!minebol) {
		$(obj).find(".remind").show();
		$(".wrapper").on("click",
		function(event) {
			$(".remind").hide()
		})
	}
}
function sayToHim(event, obj) {
	if (event.stopPropagation) {
		event.stopPropagation()
	} else {
		window.event.cancelBubble = true
	}
	var name = $(obj).closest(".chartname").children("a").html();
	var str = "对【" + name + "】说：";
	$("textarea").val("");
	$("textarea").val(str);
	$("textarea").focus();
	$(".remind").hide()
}
var color = "#000000";
var fontSize = "13px";
var lineheight = "20px";
changeFunFn(2);
function showRegister() {
	$(".mask").show();
	$(".RL").show();
	$(".register").show().siblings("div").hide();
	$(".RL h1").find("a").eq(1).addClass("RLa_active").siblings().removeClass("RLa_active")
}
function showLogin() {
	$(".mask").show();
	$(".RL").show();
	$(".login").show().siblings("div").hide();
	$(".RL h1").find("a").eq(0).addClass("RLa_active").siblings().removeClass("RLa_active");
	$(".tip20").hide();
	$(".vipsurice1").hide()
}
function closeRL() {
	$(".mask").hide();
	$(".RL").hide();
	$(".Rltip").hide();
	$(".tip20").hide();
	$(".vipsurice1").hide();
	$(".vipsurice2").hide();
	$(".marketSoft").hide();
	$(".earnMoney").hide();
	$(".schedule").hide();
	$("#ascrail2006").hide()
}
function show20tip() {
	$(".mask").show();
	$(".tip20").show()
}
function showNoreg() {
	$(".mask").show();
	$(".vipsurice1").show()
}
function showAlreg() {
	$(".mask").show();
	$(".vipsurice2").show()
}
function showMarketSoft() {
	$(".mask").show();
	$(".marketSoft").show()
}
function showEarnMoney() {
	$(".mask").show();
	$(".earnMoney").show()
}
function showSchedule() {
	$(".mask").show();
	$("#ascrail2006").show();
	$(".schedule").show()
}
var surBol;
function surcive() {
	if (surBol) {
		showAlreg()
	} else {
		showNoreg()
	}
}
$("textarea").on("keypress",
function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		sendMessageFn()
	}
});
var username = $("input[name='username']");
var kidsname = $("input[name='kidsname']");
var mobile = $("input[name='mobile']");
var verification = $("input[name='verification']");
var qq = $("input[name='qq']");
var passwords = $("input[name='passwords']");
var repassword = $("input[name='repassword']");
var loginName = $("input[name='loginName']");
var loginPwd = $("input[name='loginPwd']");
var phone_re = /^[1][3578][0-9]{9}$/;
var judge_r = false;
var judge_l = false;
function testNull(obj1, obj2) {
	if (obj1.val() == "") {
		obj1.val(obj2)
	}
	obj1.focus(function() {
		if (obj1.val() == obj2) {
			obj1.val("")
		}
		$(".Rltip").hide()
	});
	obj1.blur(function() {
		if (obj1.val() == "") {
			obj1.val(obj2)
		}
	})
}
testNull(username, "请输入您的登录账号");
testNull(kidsname, "请输入您的聊天昵称");
testNull(mobile, "请输入您的手机号码");
testNull(verification, "请输入您的验证码");
testNull(qq, "请输入您的QQ号");
testNull(passwords, "请输入您的密码");
testNull(repassword, "请再输入您的密码");
testNull(loginName, "请输入您的登录账号");
testNull(loginPwd, "请输入您的登录密码");
function NotNull_r() {
	judge_r = false;
	if (username.val() == "" || username.val() == "请输入您的登录账号") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的登录账号");
		judge_r = true;
		return
	}
	if (kidsname.val() == "" || kidsname.val() == "请输入您的聊天昵称") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的聊天昵称 ");
		judge_r = true;
		return
	}
	if (mobile.val() == "" || mobile.val() == "请输入您的手机号码") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的手机号码");
		judge_r = true;
		return
	}
	if (!phone_re.test(mobile.val())) {
		$(".Rltip").show();
		$(".Rltip").html("手机号码输入不正确");
		judge_r = true;
		return
	}
	if (verification.val() == "" || verification.val() == "请输入您的验证码") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的验证码");
		judge_r = true;
		return
	}
	if (passwords.val() == "" || passwords.val() == "请输入您的密码") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的密码");
		judge_r = true;
		return
	}
	if (repassword.val() == "" || repassword.val() == "请再输入您的密码") {
		$(".Rltip").show();
		$(".Rltip").html("请再输入您的密码");
		judge_r = true;
		return
	}
	if (repassword.val() != passwords.val()) {
		$(".Rltip").show();
		$(".Rltip").html("两次密码不一致!");
		judge_r = true;
		return
	}
}
function NotNull_l() {
	judge_l = false;
	if (loginName.val() == "" || loginName.val() == "请输入您的登录账号") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的登录账号");
		judge_l = true;
		return
	}
	if (loginPwd.val() == "" || loginPwd.val() == "请输入您的登录密码") {
		$(".Rltip").show();
		$(".Rltip").html("请输入您的登录密码");
		judge_l = true;
		return
	}
}
function clearScreen() {
	$(".chatRomUl > li").remove()
};