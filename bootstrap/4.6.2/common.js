$(".navbtn").click(function(){
  $(".navul").toggle();
});
$(window).scroll(function(){
	var sc=$(window).scrollTop();
	var rwidth=$(window).width()
	if(sc>50){
		$("#gotop").css("display","block");
	}else{
		$("#gotop").css("display","none");
	}
})
$("#gotop").click(function(){
	var sc=$(window).scrollTop();
	$('body,html').animate({scrollTop:0},500);
});
$(document).ready(function(){
    $("#btn1").on("click", function(){
    $("#sidebar_feedback .content").slideToggle();
    });
    $("#btn2").on("click", function(){
    $("#sidebar_feedback .content").slideUp();
    });
});
$(document).ready(function(){
    $("#sidebar_right .list").mouseenter(function(){
    $(this).find(".detail").toggle();
    });
    $("#sidebar_right .list").mouseleave(function(){
    $(this).find(".detail").toggle();
    });
});
$(".right_nav .drop").hover(function(){
  $(".right_nav dl").toggle();
});