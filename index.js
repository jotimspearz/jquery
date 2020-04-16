$("h1").mouseover(function(){
  $(this).css("color", "red");
});

$("h1").mouseout(function(){
  $(this).css("color", "");
});

$(".hideAll").click(function(){
  $(".d").slideToggle(function(){
    $(".d").css("display", "hidden");
  });
});

$(document).ready(function(){
  $(".hideAll").click(function(){
    $(this).text($(this).text()=="Hide All Divs" ? "Show All Divs" : "Hide All Divs");
  });
});

$("input").focus(function(){
  $(this).css("background-color", "lightblue");
});

$("input").blur(function(){
  $(this).css("background-color", "");
});

$("input").keydown(function(){
  $(this).css("background-color", "red");
});

$("input").keyup(function(){
  $(this).css("background-color", "lightblue");
});

$(".submit").click(function(){
  $("input").val("");
});

$("body").css("background-color", "purple");
