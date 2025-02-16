
$(document).ready(function(){

	//Mobile menu
	$('.menu_icon').click(function{
		$('.menu ul').slideToggle();
	});
	
	//client slider
	$('.client-corusel').owlCarousel({
		items:4
	});

	
});