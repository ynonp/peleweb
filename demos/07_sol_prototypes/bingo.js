var bingo_html = '<div class="bingo">' + 
    '<input type="number" class="guess" />' + 
    '<button>Guess</button>' + 
    '<img src="http://www.animateit.net/data/media/95/nygif9.gif" />' +
    '</div>';



function Bingo(el) {
  // this.secret = Math.floor(Math.random() * 10);
  this.secret = 7;
  this.el = el;
  this.el.innerHTML = bingo_html;

  this.el.addEventListener('click', this.guess.bind(this));
}

Bingo.prototype.guess = function() {
  var num = Number(this.el.querySelector('input').value);
  if ( this.secret === num ) {
    this.el.classList.add('win');
  }
};


var items = document.querySelectorAll('.bingo');
for ( var i=0; i < items.length; i++ ) {
  var b = new Bingo(items[i]);
}
