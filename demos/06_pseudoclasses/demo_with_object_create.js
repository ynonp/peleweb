/**
 * Light Bulb
 */
var BulbPrototype = {
  toggle: function() {
    this.isOn = ! this.isOn;
  }
};


function Bulb(initialState) {
  var self = Object.create(BulbPrototype);
  self.isOn = initialState;

  return self;
}


l1 = Bulb(false);
l2 = Bulb(true);
l3 = Bulb(true);

l1.toggle();

/*

console.log(l1.isLightOn());
*/
