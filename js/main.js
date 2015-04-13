$(document).ready(function() {

    // Smootscrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
        }
    });

    // Header Parallax
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        $('#tagline').css({
            'transform' : 'translate(0px, '+ wScroll /3 +'%)'
        });
        $('#tristan').css({
            'transform' : 'translate(0px, '+ wScroll /30 +'%)'
        });
    });

    // Ajax send mail
    $(function () {
        $('#contactForm').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: $('form').serialize(),
                success: function () {
                    //alert('form was submitted');
                    $('.notify').html("Thank you for contacting me!").addClass("show");
                    setTimeout(function(){
                        $('.notify').removeClass("show");
                    }, 6000);
                }
            });
        });
    });

});