jQuery(document).ready(function ($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#top', offset: 400 });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -80, 'axis': 'y', easing: 'easeOutQuad' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });

    /* ======= Flexslider ======= */
    $('.phone .flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    $('.slider-web.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

    $('#testimonials .quote-box').matchHeight();

    /* ======= Style Switcher (Remove on production site) ======= */
    $('#config-trigger').on('click', function (e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();
        } else {
            $panel.show();
        }
        e.preventDefault();
    });

    $('#config-close').on('click', function (e) {
        e.preventDefault();
        $('#config-panel').hide();
    });


    $('#color-options a').on('click', function (e) {
        var $styleSheet = $(this).attr('data-style');
        var $logoImage = $(this).attr('data-logo');
        $('#theme-style').attr('href', $styleSheet);
        $('#logo-image').attr('src', $logoImage);

        var $listItem = $(this).closest('li');
        $listItem.addClass('active');
        $listItem.siblings().removeClass('active');

        e.preventDefault();

    });



});

/* ======= Animations ======= */
jQuery(document).ready(function ($) {

    //Only animate elements when using non-mobile devices    
    if (isMobile.any === false) {

        /* Animate elements in #Promo */
        $('#promo .title').css('opacity', 0).one('inview', function (isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });
        $('#promo .summary').css('opacity', 0).one('inview', function (isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp2'); }
        });

        $('#promo .ipad').css('opacity', 0).one('inview', function (isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp3'); }
        });

        $('#promo .slider-web').css('opacity', 0).one('inview', function (isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp3'); }
        });

        $('.phone-holder').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp4'); }
        });

        $('.promo-landscape .phone-holder').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp4'); }
        });

        /* Animate elements in #Features */
        $('#features .icon').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });

        /* Animate elements in #How */
        $('#how .video-wrapper').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInLeft delayp1'); }
        });

        $('#how .content').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp2'); }
        });

        /* Animate elements in #faq */
        $('#faq .title').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });

        /*
        $('#faq .question').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });
        $('#faq .answer').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3');}
        });
        $('#faq .btn').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });
        */

        /* Animate elements in #story */
        $('#story .content').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInLeft delayp1'); }
        });

        $('#story .member').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp2'); }
        });

        /* Animate elements in #testimonials */
        $('#testimonials .title').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });

        /*
        $('#testimonials .quote-box').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });
        */


        $('#testimonials .people').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp3'); }
        });


        /* Animate elements in #Pricing */
        $('#pricing h2.title').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });

        $('#pricing .price-1').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInLeft delayp2'); }
        });

        $('#pricing .price-2').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp4'); }
        });

        $('#pricing .price-3').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInRight delayp2'); }
        });

        /* Animate elements in #contact */
        $('#contact .title').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp1'); }
        });

        $('#contact .intro').css('opacity', 0).one('inview', function (event, isInView) {
            if (isInView) { $(this).addClass('animated fadeInUp delayp2'); }
        });

        /*
        $('#contact .contact-form').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3');}
        });
        
        $('#contact .social-icons').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp4');}
        });
        
        */

    }


});

function register() {
    window.location.href = "https://admin.shotel.vn/user/register";
}

function goHome() {
    window.location.href = "https://admin.shotel.vn/home";
}