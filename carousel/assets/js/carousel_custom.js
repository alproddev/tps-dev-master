

$(function() {

    var $carousel = $('.product_preview_wrap').flickity({fade: true,pageDots:false});


    if($(window).width() > 992 ) {
        // Code to run for desktop
        var $carouselNav = $('.showcase_nav');
        var $carouselNavMobile = $('.showcase_nav.mobile_nav');
        var $carouselNavCells = $carouselNav.find('.item-block');

        $carouselNav.on( 'click', '.item-block', function( event ) {
        var index = $( event.currentTarget ).index();
        $carousel.flickity( 'select', index );
        });

        var flkty = $carousel.data('flickity');
        var navTop  = $carouselNav.position().top;
        var navCellHeight = $carouselNavCells.height();
        var navHeight = $carouselNav.height();


        $carousel.on( 'select.flickity', function() {
        // set selected nav cell
        $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
        var $selected = $carouselNavCells.eq( flkty.selectedIndex )
            .addClass('is-nav-selected');
        // scroll nav
        var scrollY = $selected.position().top +
            $carouselNav.scrollTop() - ( navHeight + navCellHeight ) / 2;
        $carouselNav.animate({
            scrollTop: scrollY
        });
        });

    } else {

        // Code for mobile and tablet

        var $carouselNav = $('.showcase_nav.mobile_nav');
        var $carouselNavCells = $carouselNav.find('.item-block');

        $carouselNav.on( 'click', '.item-block', function( event ) {
        var index = $( event.currentTarget ).index();
        $carousel.flickity( 'select', index );
        });

        var flkty = $carousel.data('flickity');
        var navTop  = $carouselNav.position().left;
        var navCellHeight = $carouselNavCells.width();
        var navHeight = $carouselNav.width();


        $carousel.on( 'select.flickity', function() {
        // set selected nav cell
        $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
        var $selected = $carouselNavCells.eq( flkty.selectedIndex )
            .addClass('is-nav-selected');
        // scroll nav
        var scrollX = $selected.position().left +
            $carouselNav.scrollLeft() - ( navHeight + navCellHeight ) / 2;
        $carouselNav.animate({
            scrollLeft: scrollX
        });
        });




    }


});
