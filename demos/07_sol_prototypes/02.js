function Summer() {
  this.val = 0;
}

Summer.prototype.add = function(val) {
  this.val += val;
};

Summer.prototype.getCurrentSum = function() {
  return this.val;
};


var s1 = new Summer();
var s2 = new Summer();

s1.add(10);
s1.add(20);

s2.add(30);

s2.add(5);

// prints 30
console.log(s1.getCurrentSum());

// prints 35
console.log(s2.getCurrentSum());
