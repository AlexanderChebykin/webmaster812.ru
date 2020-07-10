$(document).ready(function() {

	$('#send-number').on('submit',function() { 				
		$.ajax({
			type: "POST",
			url: "views/callMe.php",
			data: $(this).serialize()
		}).done(function() {
			$('.thanks').fadeIn();
			$(this).find('input').val('');
			$('#send-number').trigger('reset');
			setTimeout(function(){
				$('.hidden-form').css('display', 'none')
				$('.thanks').css('display', 'none')

			}
				, 2000);
		});
			return false;
        
	});


});


