var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer bouncy_dancer not_eagle" src=\'imgs/tigger.png\' height="150"></img>');

  this.setPosition();
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function () {
  // invoke original makeDancer.step function to delay steps and loop
  // adjust position of instance so that it moves straight in any direction and bounces when it hits a wall (like old DVD screensaver)
  makeDancer.prototype.step.call(this);
  // this.$node.animate({ opacity: 1, top: "-=200" }, 500);
  // this.$node.animate({ opacity: 1, top: "+=200" }, 500);
  // TODO: Bouncing functionality;
};