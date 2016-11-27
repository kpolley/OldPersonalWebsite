$(window).resize(function(){

	$('#summary').css({
		position:'fixed',
		left: ($(window).width() - $('#summary').outerWidth())/2,
		top: ($(window).height() - $('#summary').outerHeight())/2
	});

	$('#education').css({
		position:'fixed',
		left: ($(window).width() - $('#education').outerWidth())/2,
		top: ($(window).height() - $('#education').outerHeight())/2
	});

	$('#experience').css({
		position:'fixed',
		left: ($(window).width() - $('#experience').outerWidth())/2,
		top: ($(window).height() - $('#experience').outerHeight())/2
	});

	$('#projects').css({
		position:'fixed',
		left: ($(window).width() - $('#projects').outerWidth())/2,
		top: ($(window).height() - $('#projects').outerHeight())/2
	});

});

// To initially run the function:
$(window).resize();
