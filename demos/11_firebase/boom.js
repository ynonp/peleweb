/*
 * boom.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var input = document.querySelector('input');
var btn = document.querySelector('#btn-click');
var reset = document.querySelector('#btn-reset');
var val = 0;
var fb = new Firebase('pele1.firebaseio.com/boom');

btn.addEventListener('click', function() {
  val++;
  valueChanged();
  fb.set({ val: val });
});

fb.on('value', function(snapshot) {
  var data = snapshot.val();
  val = data.val;
  valueChanged();
});

function valueChanged() {
  if ( ( val % 7 === 0 ) || (val % 10 === 7 ) ) {
    document.body.classList.add('seven');    
  } else {
    document.body.classList.remove('seven');    
  }
  input.value = val;
}



reset.addEventListener('click', function() {
  val = 0;
  valueChanged();
  fb.set({ val: val });

});
