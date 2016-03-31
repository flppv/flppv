$(function(){
  $(".question h2").click(function(){
    $(this).parent().find(".answer").stop().slideToggle(60);
  });
  var now = (new Date()).getTime(),
      boomDate = (new Date(2016, 3, 6, 17)).getTime(),
      diff = boomDate - now,
      DAY = 24*60*60*1000,
      leftDays = Math.round(diff/DAY),
      word;
  switch(leftDays) {
    case 6: 
      word = "дней";
      break;
    case 4: 
      word = "дня";
      break;
    case 1: 
      word = "день";
      break;
    default: 
      word = "дней";
  }
  $("#left").html( leftDays + " " + word);
});