var windowsize = $(window).outerWidth(true);

var adjustMenu = function() {
    if (windowsize < 992) {
        $("#site_nav li").unbind('mouseenter mouseleave');
    } else if (windowsize >= 992) {
        $("#site_nav").show();
        $("#site_nav li").removeClass("hover");
        $("#site_nav li a").unbind('click');
        $("#site_nav li").unbind('mouseenter mouseleave');
		$("#site_nav li").bind('mouseenter', function() {
		 	$(this).addClass('hover');
		});
		$("#site_nav li").bind('mouseleave', function() {
		 	$(this).removeClass('hover');
		});
        $("body").removeClass("noscroll");
        $("#site_nav").removeClass("mobile_active");
    }
};

$(function() {
    // Nav: Open Nav
	$("#open_nav").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        
        if (!$("#header_nav").hasClass("mobile_active")) {
            $("#header_nav").addClass("mobile_active");
        } else {
            $("#header_nav").removeClass("mobile_active");
        }
        
        $("body").toggleClass("noscroll");
        e.stopPropagation()
    });
    
    $(document).click(function(e) {
        if ($(e.target).is("#header_nav") === false) {
            $("#header_nav").removeClass("mobile_active");
            $("body").removeClass("noscroll");
            $("#open_nav").removeClass("active");
        }
        e.stopPropagation()
    });
    
    adjustMenu();
    
    // Current Active Link
    $('#site_nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750
    });
    
    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        if (top_offset === 0) {
            $('#site_nav li').removeClass('current');
        }
    });
});