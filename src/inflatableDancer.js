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
      width: "+=100px",
      height: "+=100px"
    }, 500);

    this.$node.delay(550).animate({
      width: "-=100px",
      height: "-=100px"
    }, 500);
};

