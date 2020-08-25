var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer bouncy_dancer"></span>');
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function () {
  // invoke original makeDancer.step function to delay steps and loop
  // adjust position of instance so that it moves straight in any direction and bounces when it hits a wall (like old DVD screensaver)
  makeDancer.prototype.step.call(this);
  // TODO: Bouncing functionality;
};