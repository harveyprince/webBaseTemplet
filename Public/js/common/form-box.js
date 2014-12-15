(function($) {
	$.fn.FormBoxInit = function(){
		var $form = $(this);

		var settings = {
			//version
			version:'0.0.0',

			//options

			//functions
		};
		var login_group = [];
		login_group.push('<div class="login-group input-group">');
		login_group.push('<div class="group-switch-nav">');
		login_group.push('<span class="nav-tip">login</span>');
		login_group.push('<span class="switch-button">');
		login_group.push('<span class="nav-tip">sign up</span>');
		login_group.push('<i class="fa fa-arrow-circle-right"></i>');
		login_group.push('</span>');
		login_group.push('</div>');
		login_group.push('<form action="" method="post" autocomplete="off" type="login">');
		login_group.push('<div class="input-box-pack block-input-box">');
		login_group.push('<span class="fa fa-user"></span>');
		login_group.push('<input class="form-box-input" placeholder="email" type="email" style="ime-mode:disabled;" name="email" required="required">');
		login_group.push('</div>');
		login_group.push('<div class="input-box-pack block-input-box">');
		login_group.push('<span class="fa fa-key"></span>');
		login_group.push('<input class="form-box-input" placeholder="password" type="password" name="password" required="required">');
		login_group.push('</div>');
		login_group.push('<div class="input-box-pack block-input-box alarm-pack">');
		login_group.push('<div class="alarm-box"></div>');
		login_group.push('</div>');
		login_group.push('<div class="input-box-pack block-input-box">');
		login_group.push('<button class="box-button" type="submit">login</button>');
		login_group.push('</div>');
		login_group.push('</form>');
		login_group.push('</div>');
		var loginHTML = login_group.join("");
		var signup_group = [];
		signup_group.push('<div class="signup-group input-group">');
		signup_group.push('<div class="group-switch-nav">');
		signup_group.push('<span class="nav-tip">sign up</span>');
		signup_group.push('<span class="switch-button">');
		signup_group.push('<span class="nav-tip">log in</span>');
		signup_group.push('<i class="fa fa-arrow-circle-right"></i>');
		signup_group.push('</span>');
		signup_group.push('</div>');
		signup_group.push('<form action="" method="post" autocomplete="off" type="signup">');
		signup_group.push('<div class="input-box-pack block-input-box name-input">');
		signup_group.push('<input class="form-box-input name-input" placeholder="surname" type="text" name="surname" required="required">');
		signup_group.push('<input class="form-box-input name-input" placeholder="psname" type="text" name="psname" required="required">');
		signup_group.push('</div>');
		signup_group.push('<div class="input-box-pack block-input-box">');
		signup_group.push('<span class="fa fa-user"></span>');
		signup_group.push('<input class="form-box-input" placeholder="email" type="email" style="ime-mode:disabled;" name="email" required="required">');
		signup_group.push('</div>');
		signup_group.push('<div class="input-box-pack block-input-box">');
		signup_group.push('<span class="fa fa-key"></span>');
		signup_group.push('<input class="form-box-input" placeholder="password" type="password" name="password" required="required">');
		signup_group.push('</div>');
		signup_group.push('<div class="input-box-pack block-input-box alarm-pack">');
		signup_group.push('<div class="alarm-box"></div>');
		signup_group.push('</div>');
		signup_group.push('<div class="input-box-pack block-input-box">');
		signup_group.push('<button class="box-button" type="submit">signup</button>');
		signup_group.push('</div>');
		signup_group.push('</form>');
		signup_group.push('</div>');
		var signupHTML = signup_group.join("");
		var formHTML = loginHTML+signupHTML;
		$form.append(formHTML);

		$form.find(".switch-button").click(function(){
			var $tohide = $(".input-group:visible");
			var $toshow = $(".input-group:hidden");
			$tohide.hide();
			$toshow.fadeIn("normal");
		});

		//submit:use formdata
		$form.find("form").submit(function(e){
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
		$form.find("form").submit(function(e){
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
		$form.find('.box-button').click(function(e){
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
	}
})(jQuery);