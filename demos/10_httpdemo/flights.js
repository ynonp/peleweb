/*
 * flights.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */


var xhr = new XMLHttpRequest();
xhr.open('get', 'https://port9193.blankets.codepicnic.com');

xhr.addEventListener('load', function(ev) {
  
  var flights_array = JSON.parse(xhr.responseText);
  var ul = document.querySelector('#flights');

  for ( var i=0; i < flights_array.length; i++ ) {
    ul.innerHTML += '<li>' + flights_array[i].captain + '</li>';
  }
});

xhr.send();

