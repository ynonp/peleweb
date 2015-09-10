/*
 * slider.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var viewport = document.querySelector('.viewport');
var slider   = document.querySelector('.slider');
var idx = 0;

viewport.addEventListener('click', function() {
  // var mode = 'mode-' + idx;
  // slider.setAttribute('class', 'slider ' + mode);
  idx = (idx + 1) % 3;


  slider.style.left = (200 * idx * -1) + "px";
});
