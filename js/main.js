$(document).ready(function () {

    // Smootscrolling
    $('a[href*=#]:not([href=#])').click(function () {
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

    // Email auto suggestion
    var email = document.querySelector('.email'),
    auto = document.querySelector('.autosuffix');
    var popularEmails = ['gmail.com', 'googlemail.com', 'hotmail.com', 'yahoo.com', 'msn.com', 'aol.com'];
    email.addEventListener('keyup', function() {
        auto.innerHTML = '';
        if(email.value.match('@')) {
            var afterAt = email.value.substring(email.value.indexOf('@') + 1, email.value.length);
            var popularEmailsSub = [];
            for(var l = 0; l < popularEmails.length; l++) {
                popularEmailsSub.push(popularEmails[l].substring(0, afterAt.length))
            }
            if(afterAt === '') {
                for(var i = 0; i < popularEmails.length; i++) {
                    auto.innerHTML += '<li>' + email.value + popularEmails[i] + '</li>';
                }
            }
            else if(!(afterAt === '')) {
                var matchedEmails = [];
                for(var k = 0; k < popularEmails.length; k++) {
                    if(popularEmailsSub[k].match(afterAt)) {
                        matchedEmails.push(popularEmails[k]);                    
                    }
                }
                for(var i = 0; i < matchedEmails.length; i++) {
                    auto.innerHTML += '<li>' + email.value.substring(0, email.value.indexOf('@')) + '@' + matchedEmails[i] + '</li>';
                }
            }
            var autoItems = document.querySelectorAll('.autosuffix li');
            for(var j = 0; j < autoItems.length; j++) {
                autoItems[j].addEventListener('click', function() {
                    email.value = this.textContent;
                    auto.innerHTML = '';
                });
            }
        }
    });

    //Mobile menu
    $('.menu-btn').click(function () {
        $('.menu').toggleClass('show-menu');
    });
    $('.menu ul li a').click(function () {
        $('.menu').removeClass('show-menu');
    });

});