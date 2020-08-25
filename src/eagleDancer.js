var makeEagleDancer = function(top, left, timeBetweenSteps) {
  makeBouncyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(/*todo*/);
};

makeEagleDancer.prototype = Object.create(makeBouncyDancer.prototype);
makeEagleDancer.prototype.constructor = makeEagleDancer;
makeEagleDancer.prototype.onHover = function() {
  // ToDO
};