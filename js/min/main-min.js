$(document).ready(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),$(window).scroll(function(){var t=$(this).scrollTop();$("#tagline").css({transform:"translate(0px, "+t/5+"%)"}),$("#tristan").css({transform:"translate(0px, "+t/15+"%)"})}),$(".menu-btn").click(function(){$(".menu").slideToggle()}),$(".menu ul li a").click(function(){var t=$(window).width();t>768?$(".menu").show():768>t&&$(".menu").hide()}),$(window).resize(function(){var t=$(this).width();t>768&&$(".menu").show()}),$(window).scroll(function(){var t=$(this).scrollTop();t>$("#about").offset().top-2&&$(".skill-icons").children(".active").each(function(t){var n=$(this);setTimeout(function(){n.css("background","#f1c40f")},50*t)})}),setInterval(function(){var t=Math.floor(4*Math.random());$(".prj-item").removeClass("tada").eq(t).addClass("tada")},5e3),$(window).scroll(function(){var t=$(this).scrollTop();t>$("#clients").offset().top-400&&($("#clients img").addClass("fadeInUp"),$("#clients .text").addClass("fadeInUp"))})});