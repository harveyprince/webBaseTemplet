$(".switch-button").click(function(){
	var $tohide = $(".input-group:visible");
	var $toshow = $(".input-group:hidden");
	$tohide.hide();
	$toshow.fadeIn("normal");
});
//submit:use formdata
$("form").submit(function(e){
	var $box = $(this).find('.alarm-box').alarmInit();
	var action = $(this).attr('action');
	var data = new FormData();
	$(this).find('input').each(function(){
		data.append($(this).attr('name'),$(this).val());
	});
	$.ajax({
		data: data,
		type: "POST",
		url: action,
		cache: false,
		contentType: false,
		processData: false,
		success: function(data) {
			//callback code
		},
		error:function(){
			$box.alarm("error occured");
		}
	});
	e.preventDefault();
});
//submit:without formdata
/*
$("form").submit(function(e){
	var $box = $(this).find('.alarm-box').alarmInit();
	var action = $(this).attr('action');
	var email = $(this).find('input[name="email"]').val();
	var password = $(this).find('input[name="password"]').val();
	if($(this).attr('type')=='login'){
		$.post(action,{email:email,password:password},function(data,status){
			//callback code
		});
	}
	if($(this).attr('type')=='signup'){
		var surname = $(this).find('input[name="surname"]').val();
		var psname = $(this).find('input[name="psname"]').val();
		$.post(action,{email:email,password:password,surname:surname,psname:psname},function(data,status){
			//callback code
		});
	}
});
*/
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