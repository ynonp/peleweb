/*
 * form.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

function MyDetails(el) {
  el.addEventListener('submit', this.on_submit.bind(this));

  this.name = el.querySelector('#name');
  this.email = el.querySelector('#email');
  this.tagline = el.querySelector('#tagline');

  this.url = 'http://localhost:3030';

  el.querySelector('#btn-restore').addEventListener('click', this.restore.bind(this));

  el.querySelector('#btn-save').addEventListener('click', this.save.bind(this));
}

MyDetails.prototype.save = function() {
  var data = {
    name: this.name.value,
    email: this.email.value,
    tagline: this.tagline.value
  };

  var xhr = new XMLHttpRequest();
  xhr.open('PUT', this.url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
};


MyDetails.prototype.restore = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', this.show_data.bind(this));
  xhr.send();
};

MyDetails.prototype.show_data = function(ev) {
  var data = JSON.parse(ev.target.responseText);

  this.name.value = data.name;
  this.email.value = data.email;
  this.tagline.value = data.tagline;
};



MyDetails.prototype.on_submit = function(e) {
  e.preventDefault();
};

var details = new MyDetails(document.querySelector('form'));
