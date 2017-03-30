jQuery(document).ready(function($) {  


jQuery(window).load(function() {

        // will first fade out the loading animation

    jQuery(".status").fadeOut();

        // will fade out the whole DIV that covers the website.

    jQuery(".preloader").delay(1000).fadeOut("slow");

})

// Responsive Menu
$("ul.nav.navbar-nav li a").click(function() {
    $(".navbar-collapse").removeClass("in");
});

// data-scroll-to//

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  //scroll to top//
  // Back Top Link
var offset = 200;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.scroll-to-top').fadeIn(400);
    } else {
      $('.scroll-to-top').fadeOut(400);
    }
    });
    $('.scroll-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
});
    // jQuery Smooth Scroll
$('.page-scroll').on('click', function(event) {
    var $anchor = $(this),
        headerH = '55';
    $('html , body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
});

/* ==========================================================================
   animated background
   ========================================================================== */

(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(153,153,153,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();

});
