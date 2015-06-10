$(document).ready(function(){
	var mobileToggle = $('.mob-nav');
	var closeBigNews = $('.closeBigNews');

	mobileToggle.click(function(e){
		e.preventDefault();
		$('.navigation').stop().slideToggle();
	});

	closeBigNews.click(function(e){
		e.preventDefault();
		$(this).parent('#bigNews').slideUp();
	});
});