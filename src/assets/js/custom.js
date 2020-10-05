

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("activeHedaer");
        } else {
            $("#header").removeClass("activeHedaer");
        }
    });
});


$(document).ready(function(){

    // Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    // Click event to scroll to top
    $('.top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

// add scoll in header
$(document).ready(function(){
		  $(".add-scroll").click(function(){
			$("header").css({"overflow-y": "scroll"});
		  });
		});
