$('.mobile.btn').on('click', function(){
  var $body = $('body');

  if ( $body.hasClass('show-nav') ) {
    $body.removeClass('show-nav')
  } 
  else {
    $('body').addClass('show-nav')
  }
})

//underline on active nav link
var subpage = $('.subpage')[0].id;
$('nav .' + subpage).addClass('active');
console.log(subpage);
