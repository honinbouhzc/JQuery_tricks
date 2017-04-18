var main = function() {
 $('#top-text').keyup(function(){
   var $top = $('#top-text').val();
   	$('.top-caption').text($top);
 });
  
  $('#bottom-text').keyup(function(){
    var $bottom = $('#bottom-text').val();
    	$('.bottom-caption').text($bottom);
  });
  
  $('#image-url').keyup(function(){
    var $img_url = $('#image-url').val();
    $('.meme img').attr('src',"img/" + $img_url);
  });
};
 
$(document).ready(main);