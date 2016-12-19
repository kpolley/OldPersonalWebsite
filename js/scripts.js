$(function() {
    $('.w3-card-4').css({
        'position' : 'fixed',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2}
    });

		$('.buttons').css({
        'position' : 'fixed',
        'left' : '50%',
        'margin-left' : function() {return -$(this).outerWidth()/2}
    });
});

$(document).ready(function(){


  $('.w3-card-4').hide();
  setTimeout(function() {
    $(".w3-card-4").fadeIn(1000);
}, 500);
});

$('#toTop').click(function () {

   $("html, body").animate({scrollTop: 0}, 1000);
});
