var makeShyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer shy_dancer not_eagle" src=\'imgs/shyDancer.png\' height="150"></img>');
  this.setPosition();
};

makeShyDancer.prototype = Object.create(makeDancer.prototype);
makeShyDancer.prototype.constructor = makeShyDancer;