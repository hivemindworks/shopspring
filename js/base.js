var navDropdown = document.getElementById('nav-more')

navDropdown.addEventListener('click', function() {
  if ( hasClass( navDropdown, 'open') ) {
    navDropdown.className = 'more';
  } else {
    navDropdown.className += ' open';
  }
})

//add event listener to everywhere but #nav-more if nav-more is open
//
//
document.body.addEventListener('click', function(e) {

  if ( e.srcElement.id !== 'nav-more' ) {
    console.log('not nav more');
    if ( hasClass( navDropdown, 'open') ) {
      navDropdown.className = 'more';
    }
  }
});

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
