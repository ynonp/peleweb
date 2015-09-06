function Bingo() {
  this.secret = Math.floor(Math.random() * 10);
}

Bingo.prototype.guess = function(g) {
  return g === this.secret;
};

var bingo1 = new Bingo();
var bingo2 = new Bingo();

if ( bingo1.guess(7) ) {
  console.log('The first winner is number: ... 7');
} 

if ( bingo2.guess(10)) {
  console.log('10 is a winner for bingo2');
}
