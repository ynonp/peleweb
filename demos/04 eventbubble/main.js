
function toggle(ev) {
  var el = ev.target;
  if ( ! el.classList.contains('light') ) {
    return;
  }

  el.classList.toggle('on');
}

var l1 = document.querySelector('.room');
l1.addEventListener('click', toggle);
