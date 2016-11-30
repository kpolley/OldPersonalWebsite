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

	$('.buttons').css({
		prosition:'fixed',
		left: ($(window).width() - $('.buttons').width())/2,
	});

});

// To initially run the function:
$(window).resize();

$(document).ready(function(){
  $('.w3-panel').hide();
  setTimeout(function() {
    $(".w3-panel").fadeIn(1000);
}, 500);
});

$('#toTop').click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});
