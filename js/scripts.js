$(window).resize(function(){

	$('#summary').css({

		left: ($(window).width() - $('#summary').outerWidth())/2,
		top: ($(window).height() - $('#summary').outerHeight())/2
	});

	$('#education').css({

		left: ($(window).width() - $('#education').outerWidth())/2,
		top: ($(window).height() - $('#education').outerHeight())/2
	});

	$('#experience').css({

		left: ($(window).width() - $('#experience').outerWidth())/2,
		top: ($(window).height() - $('#experience').outerHeight())/2
	});

	$('#experience1').css({

		left: ($(window).width() - $('#experience1').outerWidth())/2,
		top: ($(window).height() - $('#experience1').outerHeight())/2
	});

	$('#projects').css({

		left: ($(window).width() - $('#projects').outerWidth())/2,
		top: ($(window).height() - $('#projects').outerHeight())/2
	});

	$('#knowledge').css({

		left: ($(window).width() - $('#knowledge').outerWidth())/2,
		top: ($(window).height() - $('#knowledge').outerHeight())/2
	});

	$('.codeicon').css({

		left: ($(window).width() - $('.codeicon').outerWidth())/2,
		top: ($(window).height() - $('.codeicon').outerHeight())/2
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

   $("html, body").animate({scrollTop: 0}, 1000);
});
