$(document).ready(function(){
	var mobileToggle = $('.mob-nav');

	mobileToggle.click(function(e){
		e.preventDefault();
		$('.navigation').stop().slideToggle();
	});
});