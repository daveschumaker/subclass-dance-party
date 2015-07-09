var dancerCounter = 0;

/***
* DANCER SUPER CLASS GET DOWN AND BOOGEY OH YEAH
***/

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
  console.log('Top: ' + top + ' Left: ' + left); 
};


/****
* SUB CLASS DANCERS WHO DON'T GET DOWN AND BOOGER BUT BOOGIE
****/

// Blinky Dancer Class
var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

// AlienDancer Class (AKA Shark)
var AlienDancer = function(top,left,timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
  this.$node = $('<span class="shark" data-dance="dancer_'+ dancerCounter +'"><img src="images/shark.gif"></span>');
  this.setPosition(top,left);
  //this.color = 'green';
  this.step();
};

AlienDancer.prototype = Object.create(BlinkyDancer.prototype);
AlienDancer.prototype.constructor = AlienDancer;

// Kungfu cat class
var KungFuKitty = function(top,left,timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
  this.$node = $('<span class="shark" data-dance="dancer_'+ dancerCounter +'"><img src="images/kungFuCat.gif"></span>');
  this.setPosition(top,left);
  this.step();
}

KungFuKitty.prototype = Object.create(BlinkyDancer.prototype);
KungFuKitty.prototype.constructor = KungFuKitty;

