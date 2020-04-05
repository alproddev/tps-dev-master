
/**
 * ----------------------------------------------------------------------
 * Navigation Transform
 */


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-63px";
  }
  prevScrollpos = currentScrollPos;
};


    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 50){
        $('.nav_change').css('color', '#FFFFFF');
    } else{
        $('.nav_change').css('color', '#000000');
    }
});


    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 150){
        $('.nav_light').css('background', 'transparent');
    } else{
        $('.nav_light').css('background', '#FFFFFF');
    }
    if(scroll < 150){
        $('.nav_light').css('border-color', '#FFFFFF');
    } else{
        $('.nav_light').css('border-color', '#000000');
    }
});

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll < 150){
    $('.nav_dark').css('background', 'transparent');
} else{
    $('.nav_dark').css('background', '#FFFFFF');
}
});

    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 50){
        $('.logo_light').css('filter', 'invert(0)');
    } else{
        $('.logo_light').css('filter', 'invert(1)');
    }
});

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll < 50){
    $('.brand_invert').css('filter', 'invert(1)');
} else{
    $('.brand_invert').css('filter', 'invert(1)');
}
});

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll < 50){
    $('.hamburger_light').css('background', '#FFFFFF');
} else{
    $('.hamburger_light').css('background', '#000000');
}
});

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if(scroll < 50){
    $('.hamburger_dark').css('background', '#000');
} else{
    $('.hamburger_dark').css('background', '#000000');
}
});
