var makeShakeyDancer = function(top, left, timeetweenSteps) {
  makeDancer.call(this, top, left, timeetweenSteps);
  this.$node = $('<img class="dancer shakey_dancer" src=\'imgs/shaker.png\' height="150"></img>');
  this.setPosition();
};

makeShakeyDancer.prototype = Object.create(makeDancer.prototype);
makeShakeyDancer.prototype.constructor = makeShakeyDancer;
makeShakeyDancer.prototype.step = function() {
  // call the old version of step
  // change left and right constently whithin given range(TBD)

  makeDancer.prototype.step.call(this);
  // TODO:
  // make it  shake & wiggle
  // this.$node.animate({ opacity: 1, left: "-=100px" }, 500);
  // this.$node.animate({ opacity: 1, left: "+=100px" }, 500);
};