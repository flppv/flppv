$(function(){
  $(".question h2").click(function(){
    $(this).parent().find(".answer").stop().slideToggle(60);
  });
});