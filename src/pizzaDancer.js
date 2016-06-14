var makePizzaDancer = function(top, left, timeBetweenSteps) {
  return new PizzaDancer(top, left, timeBetweenSteps);
};


var PizzaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("pizzaDancer"); 
};


PizzaDancer.prototype = Object.create(Dancer.prototype);
PizzaDancer.prototype.constructor = PizzaDancer;
PizzaDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
};


PizzaDancer.prototype.lineUp = function() {
  this.$node.toggleClass("PizzaDancerLineUp");
};

