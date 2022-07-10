$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsclass:'dots',
});

let hamberger = document.queryselector('.hamberger');
let times = document.queryselector('.times');
let mobileNav = document.queryselector('.mobile-nav');


hamberger.addEventListener('click', function(){
    mobileNav.classlist.add('open');

});
times.addEventListener('click', function(){
    mobileNav.classlist.remove('open');

});

});