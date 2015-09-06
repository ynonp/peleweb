Component.prototype.reset = function() {
  this.el.innerHTML = this.innerhtml;
};

function Component(el, template_id) {
  this.innerhtml = document.querySelector('#' + template_id).innerHTML;
  el.innerHTML = this.innerhtml;
  this.el = {};
  this.el.container = el;
}

TextBox.prototype = Object.create(Component.prototype);


function TextBox(el, maxlen) {
  Component.call(this, el, 'tmpl-textbox');

  this.maxlength = maxlen || 120;
  this.saved_text = "";

  this.el.ta           = el.querySelector('textarea');
  this.el.rem          = el.querySelector('.rem');
  this.el.btn_save     = el.querySelector('.btn-save');
  this.el.btn_rollback = el.querySelector('.btn-rollback');

  this.el.btn_save.addEventListener('click', this.save.bind(this));
  this.el.btn_rollback.addEventListener('click', this.rollback.bind(this));
  this.el.ta.addEventListener('input', this.update_rem.bind(this));

  this.update_rem();

}

TextBox.prototype.update_rem = function() {
  this.el.rem.innerHTML = this.maxlength - this.el.ta.value.length;
};


TextBox.prototype.save = function() {
  this.saved_text = this.el.ta.value;
  this.el.ta.value = "";
  this.update_rem();
};

TextBox.prototype.rollback = function() {
  this.el.ta.value = this.saved_text;
  this.update_rem();
};


var boxes = document.querySelectorAll('.my-textbox');

for ( var i=0; i < boxes.length; i++ ) {
  new TextBox(boxes[i]);
}


