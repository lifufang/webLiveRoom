
admin = true;    // true代表是管理员,false则反之
minebol = false; // true代表的是自己, false则反之
surBol = false;  // true代表已经注册，false则反之
//show20tip(); 
//showNoreg();


//登录注册
function register(){
	NotNull_r();
	if( judge_r == false ){
		//ajax code
		
		//判断成功
		$(".Rltip").show();
		$(".Rltip").html("注册成功");
		setTimeout(function(){
			$(".mask").hide();
			$(".RL").hide();
			$(".Rltip").hide();
		},500);		
	}
}

function login(){
	NotNull_l();
	if( judge_l == false ){
		//ajax code
		
		//判断成功
		$(".Rltip").show();
		$(".Rltip").html("登录成功");
		setTimeout(function(){
			$(".mask").hide();
			$(".RL").hide();
			$(".Rltip").hide();
		},500);
		
	}

}

//


//发送
function sendMessageFn(){
	
	var message_re = $("textarea").val();
	var message_re2 = message_re.replace(/(【df[\u4e00-\u9fa5]+】)/g,"<img src='img/face/$1.gif' border='0'/>");
	var messageBol = /(对【.*?】说：)/g.test(message_re2);
	var message = message_re2.replace(/(对【.*?】说：)/g,"");	
	var li_html;
	
	switch( fnidx ){
		case 0:
		  ImmediateNotice();
		  break;
		case 1:
		  standpoint();
		  break;
		case 2:
		  chartRoom();
		  break;		
	}
	
	$("textarea").val("");
	
	
	function chartRoom(){
		if(messageBol){
		//对他说 code
			alert(messageBol);
		}else{		
			li_html += "<li><dl><dt><img src='img/touxiangyi.png'/></dt>";
			li_html += "<dd><h2><span class='chartname' onclick='showSayToHim(event,this)'><a>助理：富贵神仙手</a><div class='remind'><div class='remindCont'>";
			li_html += "<a onclick='sayToHim(event,this)'>对他说</a><a class='stop'>禁言TA+删除言论</a></div></div></span>";
			li_html += "<span class='chartdate'>2016-04-12【15:33】</span></h2>";
			li_html += "<p class='chartmessage'><span style='color:"+color+"; font-size:"+fontSize+"; line-height:"+lineheight+"'>"+message+"</span></p></dd></dl></li>";
		}
		$(".chatRomUl").append($(li_html));
	}
	
	function ImmediateNotice(){
		li_html += "<li><dl><dt><img src='img/touxiangyi.png'/></dt>";
		li_html += "<dd><h2><span class='inform-name'>助理：富贵神仙手</span><span class='inform-date'>2016-04-12【15:33】</span>";
		li_html += "<span class='inform-close'></span></h2><p class='inform-message'><span style='color:"+color+"; font-size:"+fontSize+"; line-height:"+lineheight+"'>"+message+"</span></p>";
		li_html += "</dd></dl></li>";
		$(".informContUl").prepend($(li_html));
				
	}
	
	function standpoint(){
		li_html += "<p class='mentorViewmessage'>";
		li_html += "<span>"+message+"</span>";
		li_html += "<img class='mentorViewclosed' src='img/closed.png' /></p>";
		$(".mentorView h2").after($(li_html));
	}
	
	$(".chatRomUl").scrollTop(99999);
	
	adminBolFn();
}

function sendCaidiao( t ){
	var liHtml; 
	liHtml += "<li><dl><dt><img src='img/touxiangyi.png'/></dt>";
	liHtml += "<dd><h2><span class='chartname' onclick='showSayToHim(event,this)'><a>助理：富贵神仙手</a><div class='remind'><div class='remindCont'>";
	liHtml += "<a onclick='sayToHim(event,this)'>对他说</a><a class='stop'>禁言TA+删除言论</a></div></div></span>";
	liHtml += "<span class='chartdate'>2016-04-12【15:33】</span></h2>";
	liHtml += "<p class='chartmessage'><img src='"+t.src+"'/></p></dd></dl></li>";
	$(".chatRomUl").append($(liHtml));
	$(".caitiaoWrap").hide();
	$(".chatRomUl").scrollTop(99999);
}


adminBolFn();