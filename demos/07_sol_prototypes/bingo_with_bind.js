
function Bingo(el) {
  // this.secret = Math.floor(Math.random() * 10);
  this.secret = 7;
  this.el = el;

  this.el.addEventListener('click', this.guess.bind(this));
  // this.el.addEventListener('click', this.guess);
}

Bingo.prototype.guess = function() {
  var num = Number(this.el.querySelector('input').value);
  if ( this.secret === num ) {
    this.el.classList.add('win');
  }
};

var bingo_div = document.querySelector('.bingo');
var bingo = new Bingo(bingo_div);

