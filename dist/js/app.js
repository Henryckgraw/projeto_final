$(function(){$("html, body").on("click",function(n){n.target==document.documentElement&&$("html, body").removeClass("open-sidebar")}),$(".js-open-sidebar").on("click",function(){$("html").addClass("open-sidebar")})});