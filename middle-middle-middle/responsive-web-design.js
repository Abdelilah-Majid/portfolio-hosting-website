let menu_container = $(".menu-container");
let plan_b = $("#plans-buttons");
let plan_b_container = $("#plan-buttons-container");
let plan_main_container = $("#plan-main-container");
console.log("plan_main_container", plan_main_container);
console.log("plan_b", plan_b_container);
if ($(window).height() < $(window).width()) {
    try {
        menu.remove();
        plan_b.remove();
        plan.remove();
    } catch (e) {
        console.log("error:", e);
    }
}
if ($(window).height() >= $(window).width()) {
    try{

        plan_main_container.append(plan);
    }catch(e){
        console.log('e', e)
    }
    let price_span = $("#price-mobile");
    let save_year = $("#save-year-mobile");
    let price_year = $("#price-year-mobile");
    let plan_spans = $("#plan-mobile span");
    try{

        plan_buttons.on("click", function (e) {
            if (e.target.className === "free") {
                $("main button#current")[0].id = "";
            price_span.text("0");
            price_year.text("0");
            save_year.text("0");
            plan_spans.eq(0).text("1");
            plan_spans.eq(1).text("50");
            plan_spans.eq(2).text("20");
            plan_spans.eq(3).text("1");
            plan_spans.eq(4).text("100");
            e.target.id = "current";
        }
        if (e.target.className === "basic") {
            $("main button#current")[0].id = "";
            price_span.text("4");
            price_year.text("48");
            save_year.text("12");
            plan_spans.eq(0).text("3");
            plan_spans.eq(1).text("100");
            plan_spans.eq(2).text("40");
            plan_spans.eq(3).text("3");
            plan_spans.eq(4).text("200");
            e.target.id = "current";
        }
        if (e.target.className === "plus") {
            $("main button#current")[0].id = "";
            price_span.text("8");
            price_year.text("96");
            save_year.text("24");
            plan_spans.eq(0).text("5");
            plan_spans.eq(1).text("150");
            plan_spans.eq(2).text("60");
            plan_spans.eq(3).text("5");
            plan_spans.eq(4).text("300");
            e.target.id = "current";
        }
        if (e.target.className === "elite") {
            $("main button#current")[0].id = "";
            price_span.text("24");
            price_year.text("288");
            save_year.text("72");
            plan_spans.eq(0).text("10");
            plan_spans.eq(1).text("300");
            plan_spans.eq(2).text("120");
            plan_spans.eq(3).text("10");
            plan_spans.eq(4).text("600");
            e.target.id = "current";
        }
    });
}catch(e){
    console.log('e', e)
}
    console.log("price span", price_span);
}
$(window).resize(function () {
    var height = $(window).height();
    var width = $(window).width();
    if (height >= width) {
        try {
            menu.remove();
            menu_container.append(menu);
            menu.on("click", function (e) {
                nav_list.slideToggle();
            });

            plan_b.remove();
            plan_b_container.append(plan_b);
            plan_buttons.on("click", function (e) {
                if (e.target.className === "free") {
                    $("main button#current")[0].id = "";
                    price_span.text("0");
                    price_year.text("0");
                    save_year.text("0");
                    plan_spans.eq(0).text("1");
                    plan_spans.eq(1).text("50");
                    plan_spans.eq(2).text("20");
                    plan_spans.eq(3).text("1");
                    plan_spans.eq(4).text("100");
                    e.target.id = "current";
                }
                if (e.target.className === "basic") {
                    $("main button#current")[0].id = "";
                    price_span.text("4");
                    price_year.text("48");
                    save_year.text("12");
                    plan_spans.eq(0).text("3");
                    plan_spans.eq(1).text("100");
                    plan_spans.eq(2).text("40");
                    plan_spans.eq(3).text("3");
                    plan_spans.eq(4).text("200");
                    e.target.id = "current";
                }
                if (e.target.className === "plus") {
                    $("main button#current")[0].id = "";
                    price_span.text("8");
                    price_year.text("96");
                    save_year.text("24");
                    plan_spans.eq(0).text("5");
                    plan_spans.eq(1).text("150");
                    plan_spans.eq(2).text("60");
                    plan_spans.eq(3).text("5");
                    plan_spans.eq(4).text("300");
                    e.target.id = "current";
                }
                if (e.target.className === "elite") {
                    $("main button#current")[0].id = "";
                    price_span.text("24");
                    price_year.text("288");
                    save_year.text("72");
                    plan_spans.eq(0).text("10");
                    plan_spans.eq(1).text("300");
                    plan_spans.eq(2).text("120");
                    plan_spans.eq(3).text("10");
                    plan_spans.eq(4).text("600");
                    e.target.id = "current";
                }
            });
            plan_main_container.append(plan);
            let price_span = $("#price-mobile");
            let save_year = $("#save-year-mobile");
            let price_year = $("#price-year-mobile");
            let plan_spans = $("#plan-mobile span");
        } catch (e) {
            console.log("error", e);
        }
    }
    if (height < width) {
        try {
            menu.remove();
            nav_list.slideDown();
            plan_b.remove();
            plan.remove();
        } catch (e) {
            console.log("error:", e);
        }
    }
});
