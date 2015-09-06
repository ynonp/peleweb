/**
 * Light Bulb
 */
function Bulb(initialState) {
  this.isOn = initialState;
}

Bulb.prototype.toggle = function() {
  this.isOn = ! this.isOn;
};


l1 = new Bulb(false);
l2 = new Bulb(true);
l3 = new Bulb(true);

l1.toggle();

/*

console.log(l1.isLightOn());
*/
