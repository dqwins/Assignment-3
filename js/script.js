console.log("Connected!");
var x = document.title;
console.log(x);


$("#Layer_1").hide();
$("#Layer_2").hide();
$("#Layer_3").hide();

$("#pencil").on().click(function () {
    $("#pencil").css("transform", "translate(700px) rotate(-45deg)");
    $("#pencil").css("transition", "all 1s");
    $("#Layer_1").show();
});

$("#Layer_1").on().click(function () {
    $("#Layer_3").show();
    $("#Layer_1").hide();
    $("#Layer_2").show();
});

$("#turn").on().click(function () {
    if ($("#Layer_3").css("transform") === "none") {
        $("#Layer_3").css("transform", "rotate(180deg)");
    } else {
        $("#Layer_3").css("transform", "none");
    }
    $("#Layer_3").css("transition", "all 1s");
});


//$("#Layer_2").css({"background": "url(images/background.svg)"});
$("#head").on("click", function () {
    $("#Layer_2").show();
    $("#Layer_2").css({"background": "url(images/background.svg)"});
})

//$("selector").css({"background": "url(image)"});  




//Coloring Settings

$("#eyedrow1").on("click", function () {
    $("#eyedrow1 .cls-1").css("fill", "#564138");
});

$("#eyebrow2").on("click", function () {
    $("#eyebrow2 .cls-1").css("fill", "#564138");
});

$("#eyebrow3").on("click", function () {
    $("#eyebrow3 .cls-1").css("fill", "#564138");
});

$("#eyebrow4").on("click", function () {
    $("#eyebrow4 .cls-1").css("fill", "#564138");
});



$("#tuff1").on("click", function () {
    $("#tuff1 .cls-1").css("fill", "#f6f5ae");
});
 
$("#tuff2").on("click", function () {
    $("#tuff2 .cls-1").css("fill", "#f6f5ae");
});

$("#tuff3").on("click", function () {
    $("#tuff3 .cls-1").css("fill", "#f6f5ae");
});

$("#tuff4").on("click", function () {
    $("#tuff4 .cls-1").css("fill", "#f6f5ae");
});



$("#head").on("click", function () {
    $("#head .cls-1").css("fill", "#e49273");
});



$("#lefteye").on("click", function () {
    $("#lefteye .cls-1").css("fill", "white");
});

$("#righteye").on("click", function () {
    $("#righteye .cls-1").css("fill", "white");
});

$("#lefteye-pupil").on("click", function () {
    $("#lefteye-pupil .cls-1").css("fill", "#2e86ab");
});

$("#righteye-pupil").on("click", function () {
    $("#righteye-pupil .cls-1").css("fill", "#2e86ab");
});



