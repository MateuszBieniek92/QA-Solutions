$(function(){function s(){n.height($(window).height()+60)}function e(){b.html(""),v.html(""),C.html(""),g.html("")}var o=$(".stickyBar"),r=$(".logo"),i=o.find(".menu"),t=i.offset().top;$(function(){$(window).on("scroll",function(){$(document).scrollTop()>t?(o.addClass("sticky"),r.addClass("sticky-logo"),i.addClass("sticky-menu")):(o.removeClass("sticky"),r.removeClass("sticky-logo"),i.removeClass("sticky-menu"))})}),$(window).on("rezise",function(){var s=$(document).scrollTop();s=o.hasClass("sticky")?i.offset().top:o.offset().top,s>t?(o.addClass("sticky"),r.addClass("sticky-logo"),i.addClass("sticky-menu")):(o.removeClass("sticky"),r.removeClass("sticky-logo"),i.removeClass("sticky-menu"))});var l=$(".hamburger"),n=$(".main-section");$(".triangle");$(window).resize(s);var d=$(".training-list"),a=($(".contact-form").find("form"),$(".contact-form").find("form").children()),c=$(".send-btn"),p=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,u=a.first(),f=a.eq(2),h=a.eq(4),m=a.eq(6),b=a.eq(1),v=a.eq(3),C=a.eq(5),g=a.eq(7);u.removeClass("border-input"),f.removeClass("border-input"),h.removeClass("border-input"),m.removeClass("border-input"),u.on("click",function(){$(this).toggleClass("border-input"),f.removeClass("border-input"),h.removeClass("border-input"),m.removeClass("border-input")}),f.on("click",function(){u.removeClass("border-input"),h.removeClass("border-input"),m.removeClass("border-input"),$(this).toggleClass("border-input")}),h.on("click",function(){u.removeClass("border-input"),f.removeClass("border-input"),m.removeClass("border-input"),$(this).toggleClass("border-input")}),m.on("click",function(){u.removeClass("border-input"),f.removeClass("border-input"),h.removeClass("border-input"),$(this).toggleClass("border-input")});var k=!0;c.on("click",function(s){var o=u.val(),r=f.val(),i=h.val(),t=m.val();o.length>5?p.test(r)?i.length>3?t.length>5?(k=!0,e(),u.css("border"," 1px solid #3e6587"),f.css("border"," 1px solid #3e6587"),h.css("border"," 1px solid #3e6587"),m.css("border"," 1px solid #3e6587")):(s.preventDefault(),k=!1,e(),g.html("Podany opis jest za krótki!"),u.css("border"," 1px solid #3e6587"),f.css("border"," 1px solid #3e6587"),h.css("border"," 1px solid #3e6587"),m.css("border","2px solid #f29d16")):(s.preventDefault(),k=!1,e(),C.html("Podany opis tematu jest za krótki!"),u.css("border"," 1px solid #3e6587"),f.css("border"," 1px solid #3e6587"),h.css("border","2px solid #f29d16"),m.css("border"," 1px solid #3e6587")):(s.preventDefault(),k=!1,e(),v.html("Podany adres e-mail jest nie prawidłowy!"),u.css("border"," 1px solid #3e6587"),f.css("border","2px solid #f29d16"),h.css("border"," 1px solid #3e6587"),m.css("border"," 1px solid #3e6587")):(s.preventDefault(),k=!1,b.html("Podana wartość jest za krótka!"),u.css("border","2px solid #f29d16"),f.css("border"," 1px solid #3e6587"),h.css("border"," 1px solid #3e6587"),m.css("border"," 1px solid #3e6587"))});i.children().children().first(),i.children().children().eq(1),i.children().children().eq(2),i.children().children().last();!function(){$('a[href^="#"]').on("click",function(s){s.preventDefault();var e=this.hash,o=$(this.hash).offset().top;$("html, body").stop().animate({scrollTop:o},3e3,function(){window.location.hash=e})})}(),function(){l.on("click",function(){i.slideToggle().addClass("show-hide-menu")})}(),s(),function(){l.on("click",function(){$(this).toggleClass("is-active")})}(),function(){d.find("dd").addClass("hide"),d.find("dt").on("click",function(){$(this).next().slideToggle().toggleClass("hide"),$(this).children().last().toggleClass("rotate")})}()});