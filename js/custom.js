
	
	/* Fixed Menu */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 60) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	
	/* send message */

	
	$('#btnSend').on('click', function(){

		
		var name=$('#name').val();
		if(name !=""){
			alert("Dear " + name +" Sorry. This function still maintaining. Use our phone number to contact us. !  ");
		}else{
			alert("Dear Sorry. This function still maintaining. Use our phone number to contact us. !  ");
		}
		
	});
	
	$(document).ready(function(){

		$(".filter-button").click(function(){
			var value = $(this).attr('data-filter');
			
			if(value == "all")
			{
				//$('.filter').removeClass('hidden');
				$('.filter').show('1000');
			}
			else
			{
	//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
	//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
				$(".filter").not('.'+value).hide('3000');
				$('.filter').filter('.'+value).show('3000');
				
			}
		});
		
		if ($(".filter-button").removeClass("active")) {
	$(this).removeClass("active");
	}
	$(this).addClass("active");
	
	});
