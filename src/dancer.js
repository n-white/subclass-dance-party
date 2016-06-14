// var makeDancer = function(top, left, timeBetweenSteps) {
//   return new Dancer(top, left, timeBetweenSteps);
// };


var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.clickInteraction();
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.clickInteraction = function () {
  var $elem = this.$node;
  $elem.click(function() {
    console.log('CLICK!', $elem);
    $elem.addClass('selected');

    if (window.interactingDancers.length === 0) {
      window.interactingDancers.push($elem);
    } else if (window.interactingDancers.length === 1 ) {
      window.interactingDancers.push($elem);
      window.interactingDancers.forEach(function(item, index) {
        item.attr('id', 'center-dancer-' + index);
        item.removeClass('selected');
      });
    }
  });
};