$(document).ready(function(){
	var mobileToggle = $('.mob-nav');
	var closeBigNews = $('.closeBigNews');
	var navigation = $('.navigation');
	var navLinks = $('.navigation li a');
	//navigation.velocity({height: 'auto'});
	var isNavVisible = false;

	function reverseNav(n){
		if(n)
			n = !n;
		else 
			n = true;
		return n;
	}

	mobileToggle.click(function(e){
		e.preventDefault();
		
		if(navigation.is(':visible'))
			navigation.velocity('slideUp', {duration: 450, mobileHA: true});
		else
			navigation.velocity('slideDown');
	});

	navLinks.click(function(){
		navigation.hide();
	});



	closeBigNews.click(function(e){
		e.preventDefault();
		$(this)
			.parent('#bigNews')
				.velocity({
					translateZ: 0, 
					opacity: 0,
					height: 0
				}, {
					duration: 750,
					delay: 150
				});
	});
});