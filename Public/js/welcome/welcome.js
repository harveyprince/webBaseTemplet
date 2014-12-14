$(".switch-button").click(function(){
	var $tohide = $(".input-group:visible");
	var $toshow = $(".input-group:hidden");
	$tohide.hide();
	$toshow.fadeIn("normal");
});
$("form").submit(function(e){
	var data = new FormData();
	$(this).find('input').each(function(){
		data.append($(this).attr('name'),$(this).val());
	});
	var action = $(this).attr('action');
	$.ajax({
		data: data,
		type: "POST",
		url: action,
		cache: false,
		contentType: false,
		processData: false,
		success: function(data) {
			alert(data);
		},
		error:function(){
		}
	});
	e.preventDefault();
});
function validate_email(field)
{
	with (field)
	{
	apos=value.indexOf("@")
	dotpos=value.lastIndexOf(".")
	if (apos<1||dotpos-apos<2) 
	  {return false}
	else {return true}
	}
}
$('.box-button').click(function(e){
	//valid input
	var $box = $(this).parents('form').find('.alarm-box').alarmInit();
	$(this).parents('form').find('input').each(function(){
		if($(this).attr('required')){
			if(($(this).val()!="")&&($(this).val()!=null)){
				switch($(this).attr('type')){
					case 'email':
						if(!validate_email(this)){
							$box.alarm("email is invalid!");
							e.preventDefault();
						}
						break;
					case 'password':
						break;
					default:
						break;
				}
			}else{
				$box.alarm($(this).attr('name') + " is required!");
				e.preventDefault();
			}
		}
	});
});