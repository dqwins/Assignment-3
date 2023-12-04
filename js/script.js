console.log("Connected!");
var x = document.title;
console.log(x);


$("#Layer_1").hide();
$("#Layer_3").hide();

$("#pencil").on().click(function () {
    $("#pencil").css("transform", "translate(700px) rotate(-45deg)");
    $("#pencil").css("transition", "all 1s");
    $("#Layer_1").show();
});

$("#Layer_1").on().click(function () {
    $("#Layer_3").show();
    $("#Layer_1").hide();
});


//Coloring Settings

$("#curvy-eyebrow1").on("click", function () {
    $("#curvy-eyebrow1 .cls-1").css("fill", "#231c07");
});

$("#curvy-eyebrow2").on("click", function () {
    $("#curvy-eyebrow2 .cls-1").css("fill", "#231c07");
});

$("#eyebrow3").on("click", function () {
    $("#eyebrow3 .cls-1").css("fill", "#231c07");
});

$("#eyebrow4").on("click", function () {
    $("#eyebrow4 .cls-1").css("fill", "#231c07");
});



$("#hair1").on("click", function () {
    $("hair1 .cls-1").css("fill", "pink");
});

$("#hair2").on("click", function () {
    $("#hair2 .cls-1").css("fill", "#red");
});

$("#head").on("click", function () {
    $("#head .cls-1").css("fill", "pink");
});









