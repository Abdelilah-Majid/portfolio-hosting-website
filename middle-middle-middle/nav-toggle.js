let menu = $("#menu");
let nav_list = $(".nav-div-last");

if ($(window).width() <= $(window).height()) {
    nav_list.slideToggle();
}

menu.on("click", function (e) {
    nav_list.slideToggle();
});
