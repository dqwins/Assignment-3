console.log("Connected!");
var x = document.title;
console.log(x);

var man = $("#head");

$("#pencil").on().click(function () {
    $("#pencil").css("transform", "translate(700px) rotate(-45deg)");
    $("#pencil").css("transition", "all 1s");
});


man.hide();

$("#eyebrow3").on("click", function () {
    man.fadeToggle();
});


//  $("#man-outline-01").on().click(function () {
//     $(this).show();
//  });

