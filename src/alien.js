var AlienDancer = function(top,left,timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
  //this.color = 'green';
};

AlienDancer.prototype = Object.create(BlinkyDancer.prototype);
AlienDancer.prototype.constructor = AlienDancer;

AlienDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left,
    border: '15px solid green'
  };
  this.$node.css(styleSettings);
};