var makeColorBlinkDancer = function(top, left, timeBetweenSteps) {
  return new ColorBlinkDancer(top, left, timeBetweenSteps);
};


var ColorBlinkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};


ColorBlinkDancer.prototype = Object.create(Dancer.prototype);
ColorBlinkDancer.prototype.constructor = ColorBlinkDancer;
ColorBlinkDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    this.$node.toggleClass('dancer--blue');
};

ColorBlinkDancer.prototype.lineUp = function() {
  this.$node.toggleClass("colorBlinkLineUp");
};
