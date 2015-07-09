// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><img src="images/head-bangin.gif"></span>');
  this.setPosition(top,left);
  this.step();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//Debug shit
Dancer.prototype.nodeMe = function() {
  console.log(this.$node);
};