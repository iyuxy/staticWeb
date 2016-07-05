function SetHome(obj){ 
	try{ 
		obj.style.behavior='url(#default#homepage)';obj.setHomePage('http://www.wurongbo.com'); 
		} 
	catch(e){ 
		if(window.netscape) { 
						try { 
							netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
							} 
	catch (e) { 
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
				} 
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	prefs.setCharPref('browser.startup.homepage','http://www.wurongbo.com'); 
	}else{ 
			alert("您的浏览器不支持，请按照下面步骤操作：\n1.打开浏览器设置。\n2.点击设置网页。\n3.输入："+'http://www.wurongbo.com'+"点击确定。"); 
			} 
		} 
	} 
function shoucang(){ 
	try{ 
		window.external.addFavorite('http://www.wurongbo.com/','荣波矿粉加工厂'); 
		} 
	catch (e){ 
			try{ 
				window.sidebar.addPanel('http://www.wurongbo.com/','荣波矿粉加工厂', ""); 
				} 
	catch (e){ 
			alert("加入收藏失败，请使用Ctrl+D进行添加"); 
			} 
		} 
	} 
//设为首页和加为收藏的代码结

$(document).ready(function(){
	$(".mappic").hover(function(){
	$(".zoom").show();
	$(".zoom").animate({marginTop:"50px"},"fast");
	$(".maplink").slideToggle();
	},function(){
	$(".zoom").animate({marginTop:"-40px"},100);
	$(".maplink").slideToggle();
	$(".zoom").hide();
	})
	
$(function(){
$(window).scroll(function(){
var scroH = $(this).scrollTop();
$("#top").click(function(){
    var dsq=setInterval(scrollMove,60);
     function scrollMove(){
	 var x=document.documentElement.scrollTop;
		document.documentElement.scrollTop = x/1.1;
        if(x<1)clearInterval(dsq);
		}
	})
if(scroH>=50){
    $("#top").show();
	}
else if(scroH<50){
		$("#top").hide();
   }
	})
	})
})





 function getExplorer() {
var explorer = window.navigator.userAgent ;
if(explorer.indexOf("Chrome") >= 0){
$("#top").css({width:"0px"});
}
}
getExplorer();