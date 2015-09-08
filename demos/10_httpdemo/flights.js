/*
 * flights.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */


var xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3030/flights');

xhr.addEventListener('load', function(ev) {
  
  var flights_array = JSON.parse(xhr.responseText);
  var ul = document.querySelector('#flights');

  for ( var i=0; i < flights_array.length; i++ ) {
    ul.innerHTML += '<li>' + flights_array[i].captain + '</li>';
  }
});

xhr.send();

