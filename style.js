function myFunction() {
  $("#helper-text").css("opacity", "0.5");


  var word = Math.round(Math.random() * 6) + 1;
  var value = word;

  if (word == 1) {
    value = "Movies";
} else if (word == 2) {
    value ="Recipes";
} else if (word == 3) {
    value = "Table games";
} else if (word == 4) {
    value = "Workout";
} else if (word == 5) {
    value ="Music";
} else if (word == 6) {
    value = "Games";
} else if (word == 7) {
    value = "Fashion";
  }



  $("#circle").css("-webkit-animation", "flip 2s cubic-bezier(1,.37,.63,.82)");
  setTimeout(function(){$("#words").text(value)}, 500);

}
$("#circle").bind('oanimationend animationend webkitAnimationEnd', function() {
  $("#circle").css("-webkit-animation", "updown 4s linear infinite")
});
