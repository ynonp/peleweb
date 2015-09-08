/*
 * game.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

function Game(el) {
  this.el = el;

  this.squares  = el.querySelectorAll('.square');
  this.winner   = el.querySelector('.winner');
  this.score_el = el.querySelector('#score');

  this.score = 0;

  this.el.addEventListener('click', this.on_click.bind(this));
  this.start_new_timer();
}

Game.prototype.start_new_timer = function() {
  clearTimeout(this.timer);
  this.timer = setTimeout(this.on_timeout.bind(this), 2000);
};

Game.prototype.on_timeout = function() {
  this.change_score(-2);
  this.shuffle();
  this.start_new_timer();
};


Game.prototype.on_click = function(ev) {
  this.start_new_timer();
  var item = ev.target;
  if ( ! item.classList.contains('square') ) {
    return;
  }

  if ( item.classList.contains('winner') ) {
    this.change_score(+5);
  } else {
    this.change_score(-5);
  }
  this.shuffle();
};


Game.prototype.change_score = function(delta) {
  this.score += delta;
  this.score_el.innerHTML = this.score;
};



Game.prototype.shuffle = function() {
  this.winner.classList.remove('winner');
  this.winner = _.sample(this.squares);

  this.winner.classList.add('winner');
};

g = new Game(document.querySelector('.game'));
g.shuffle();

