var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      html.prependTo('.comments'); 
      $('#comment').val("");
	    }else{
	    	$('.error').text('Please enter your comment.');
	    }
     return false;
    });
    };

$(document).ready(main);