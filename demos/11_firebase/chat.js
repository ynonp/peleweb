/*
 * chat.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var fb = new Firebase('https://pele1.firebaseio.com/chat');

var sendBtn = document.querySelector('.msg button');
var input = document.querySelector('.msg input');
var chatArea = document.querySelector('.chat');

sendBtn.addEventListener('click', function() {
  fb.push({ text: input.value });
  input.value = "";
});


fb.on("child_added", function(snapshot) {
  var newMessage = snapshot.val();
  chatArea.innerHTML += '<p>' + newMessage.text + '</p>';
});
