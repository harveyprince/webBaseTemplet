$(".switch-button").click(function(){
	var $tohide = $(".input-group:visible");
	var $toshow = $(".input-group:hidden");
	$tohide.hide();
	$toshow.fadeIn("normal");
});
$('.box-button').click(function(){
});