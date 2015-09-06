function save_text(container) {
  var ta = container.querySelector('textarea');
  container.saved_text = ta.value;
  ta.value = "";
}

function rollback_text(container) {
  var ta = container.querySelector('textarea');
  ta.value = container.saved_text || "";
}


function save_or_restore_text(ev) {  
  var btn       = ev.target;
  var container = this;

  if ( btn.classList.contains('btn-save') ) {
    save_text(container);
  } else if ( btn.classList.contains('btn-rollback') ) {
    rollback_text(container);
  }
}

var boxes = document.querySelectorAll('.my-textbox');

for ( var i=0; i < boxes.length; i++ ) {
  boxes[i].addEventListener('click', save_or_restore_text);
}


