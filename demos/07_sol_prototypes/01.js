function Person(name) {
  this.name = name;
  this.age = 1;
}

Person.prototype.grow_up = function() {
  this.age++;
};

Person.prototype.hello = function() {
  console.log('Hello!' + this.name + ", " + this.age);
};

var p1 = new Person('Mike');
var p2 = new Person('Jim');

// prints: My name is Mike and I am 1 years old
p1.hello();

p1.grow_up();

// prints: My name is Mike and I am 2 years old
p1.hello();

// prints: My name is Jim and I am 1 years old
p2.hello();
