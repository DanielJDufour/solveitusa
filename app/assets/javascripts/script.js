$(document).ready(function(){
	
	//MODALS
	$('#login').click(function(){
		$('#modal-container_login').fadeIn().css({'display': 'block'});
	});

	$('.button').click(function(){
		$('#modal-container_login').fadeOut();
	});


	//"HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#modal-overlay_login').click(function(){
		$('#modal-container_login').fadeOut();
	});

	$('#signup').click(function(){
		$('#modal-container_signup').fadeIn().css({'display': 'block'});
	});

	$('.button').click(function(){
		$('#modal-container_signup').fadeOut();
	});


	//"HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$('#modal-overlay_signup').click(function(){
		$('#modal-container_signup').fadeOut();
	});



});
