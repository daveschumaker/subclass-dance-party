var dancerCounter = 0;

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  dancerCounter++;
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer" data-dance="dancer_'+ dancerCounter +'"><img src="images/head-bangin.gif"></span>');
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

// GET CRAZY.
Dancer.prototype.goSomewhere = function(top, left, timeToMove) {
  timeToMove = timeToMove || 2000;
  //this.$node.animate()
  this.$node.animate({
  left: top,
  top: left
  }, timeToMove, function() {});  
};