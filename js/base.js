$('.mobile.btn').on('click', function(){
  var $body = $('body');

  if ( $body.hasClass('show-nav') ) {
    $body.removeClass('show-nav')
  } 
  else {
    $('body').addClass('show-nav')
  }
})
