describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      var blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('shakeyDancer', function() {

  var shakeyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakeyDancer = new makeShakeyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a shake animation as a CSS property', function() {

    expect($('.shakey_dancer').css('animation', 'shake') !== null).to.be.true;
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      var shakeyDancer = new makeShakeyDancer(10, 20, timeBetweenSteps);
      sinon.spy(shakeyDancer, 'step');
      expect(shakeyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakeyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakeyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a bounce animation as a CSS property', function() {
    expect($('bouncy_dancer').css('animation', 'bounce') !== null).to.be.true;
  });

  describe('dance', function() {

    it('should call step at least once per second', function() {
      var bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});


// describe('shyDancer', function() {

//   var shyDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     shyDancer = new makeShyDancer(10, 20, timeBetweenSteps);
//   });

//   it('should have a jQuery $node object', function() {
//     expect(shyDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it('should have toggle off when it is hovered over', function() {
//     sinon.spy(shyDancer.$node, 'toggle');
//     expect(shyDancer.$node.toggle.called).to.be.true;
//   });

//   describe('dance', function() {

//     it('should call step at least once per second', function() {
//       var shyDancer = new makeShyDancer(10, 20, timeBetweenSteps);
//       sinon.spy(shyDancer, 'step');
//       expect(shyDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(shyDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(shyDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });
