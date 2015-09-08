/*
 * put.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */


var xhr = new XMLHttpRequest();
xhr.open('put', 'http://localhost:9292/');
xhr.setRequestHeader("Content-Type","application/json");
xhr.addEventListener('load', function() {

});

var data = { count: 7 };
  
xhr.send(JSON.stringify(data));
