var makeEagleDancer = function(top, left, timeBetweenSteps) {
  makeBouncyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer bouncy_dancer eagle_dancer" src=\'imgs/spaceEagle.png\' height="150"></img>');
  this.moving = false;
  this.setPosition();
};

makeEagleDancer.prototype = Object.create(makeBouncyDancer.prototype);
makeEagleDancer.prototype.constructor = makeEagleDancer;
makeEagleDancer.prototype.onHover = function() {
  // ToDO
};