
function Person() {
  this.age = 1;
}

var AnimalPrototype = {
  run: function() {
    console.log('ahhhhhhh');
  }
};

function Animal() {
}

Animal.prototype = AnimalPrototype;

Person.prototype = Object.create(AnimalPrototype);
Person.prototype.grow_up = function() {
    this.age++;
};

p.run();

var p = new Person();
var q = new Person();
var r = new Person();

