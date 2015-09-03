// DOM: Document Object Model


function updateLength() {
  var p = document.querySelector('.len');
  var i = document.querySelector('input');
  p.innerHTML = i.value.length;

  if ( i.value.length > 10 ) {
    p.classList.add('error');
    // p.setAttribute('class', 'error');
  } else {
    p.classList.remove('error');
  }

}

var i = document.querySelector('input');
i.addEventListener('input', updateLength);

// DOM Events: input, click, change, blur, focus, mouseover
//             keydown, keyup, ...
