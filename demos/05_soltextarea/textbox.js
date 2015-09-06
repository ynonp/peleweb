
/**
 * Functions
 */

// var name = "ynon";
// window.email = "ynon@ynonperek.com";


function sum() {
  var s = 0;
  for ( var i=0; i < arguments.length; i++ ) {
    s += arguments[i];
  }

  return s;
}

var res = sum(10, 20, 30, 40);

var _ta = document.querySelector('.my-textbox textarea');
var _saved_text = "";
var _max = 120;

document.querySelector('#btn-save').addEventListener("click", commit);
document.querySelector('#btn-rollback').addEventListener("click", rollback);
_ta.addEventListener('input', update_remaining_characters);


var fill_textarea_with_text = function(text) {
  // default value
  text = text || "default";
  _ta.value = text;
};

function update_remaining_characters() {
  var remaining = _max - _ta.value.length;
  var el = document.querySelector('#rem');
  el.innerHTML = remaining;
}

function commit() {
  _saved_text = _ta.value;
  _ta.value = "";
}

function rollback() {
  _ta.value = _saved_text;
}

