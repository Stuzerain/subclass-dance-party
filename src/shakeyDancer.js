var makeShakeyDancer = function(top, left, timeetweenSteps) {
  makeDancer.call(this, top, left, timeetweenSteps);
  this.$node = $('<span class="dancer shakey_dancer"></span>');
};

makeShakeyDancer.prototype = Object.create(makeDancer.prototype);
makeShakeyDancer.prototype.constructor = makeShakeyDancer;
makeShakeyDancer.prototype.step = function() {
  // call the old version of step
  // change left and right constently whithin given range(TBD)
  makeDancer.prototype.step.call(this);
  // TODO:
  // make it  shake & wiggle
};