$(function () {

let hamburger = $('.hamburger');

function animatedHamburger() {
    hamburger.on("click", function () {
        $(this).toggleClass("is-active");
    });
 };


animatedHamburger();
});
