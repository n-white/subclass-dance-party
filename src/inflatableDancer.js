var makeInflatableDancer = function(top, left, timeBetweenSteps) {
  return new InflatableDancer(top, left, timeBetweenSteps);
};


var InflatableDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};


InflatableDancer.prototype = Object.create(Dancer.prototype);
InflatableDancer.prototype.constructor = InflatableDancer;
InflatableDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    
    this.$node.animate({
      width: "50px",
      height: "50px"
    }, 500);

    this.$node.delay(600).animate({
      width: "0px",
      height: "0px"
    }, 100);
};


InflatableDancer.prototype.lineUp = function() {
  this.$node.toggleClass("inflatableDancerLineUp");
};

