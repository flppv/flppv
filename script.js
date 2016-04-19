$(function(){

  if (window.location.hash) {
    var hash = window.location.hash; 
    $(hash).find(".answer").stop().slideToggle(60);
  }

  $(".question h2").click(function(){
    $(this).parent().find(".answer").stop().slideToggle(60);
  });
});