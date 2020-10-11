let plan_buttons = $("#plans-buttons button");
let plan = $(`
<div class="">
<div class="plan-container margin-top-small">
    <div id="mobile-display-none">PLUS</div>
    <div class="price-container flex flex-row justify-between">
        <b id="price-b">$<span id="price-mobile">8</span>/mo</b>
        <div class="flex flex-colomn">
            <p>Charging <span id="price-year-mobile">96</span>$ yearly</p>
            <p class="font-blue">SAVE <span id="save-year-mobile">24</span>$</p>
        </div>
    </div>
    <div class="flex flex-colomn justify-start margin-top-small" id="plan-mobile">
        <pre><span>5</span> website
<span>150</span>GB website space
<span>60</span>Mb/s bandwidth
<span>5</span> included domains
<span>300</span>Mb Email storage
</pre>
    </div>
    <div class="margin-top-15">
    <a href="./signup.html"> 
    <button class="button blue font-white">Select Plan</button>
    </a>
    </div>

</div>
</div>
`);
let price_span = $("#price-mobile");
let save_year = $("#save-year-mobile");
let price_year = $("#price-year-mobile");
let plan_spans = $("#plan-mobile span");
console.log(plan_buttons, price_span, save_year, price_year, plan_spans);
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
