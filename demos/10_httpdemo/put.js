/*
 * put.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */


var xhr = new XMLHttpRequest();
xhr.setRequestHeader("Content-Type","application/json");
xhr.addEventListener('load', function() {
});

var data = { name: 'ynon' };
xhr.send(JSON.stringify(data));
