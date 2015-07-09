// Make a random position.
var makeRandomPosition = function() {
  var top = Math.floor(($(window).width()-150) * (Math.random()));
  var left = Math.floor(($(window).height()-100) * (Math.random()));
  if (left < 50) {
    left += 75;
  }
  if(top < 50){
    top += 150;
  }

  if(top > $(window).width()){
    top = $(window).width() - 500;
  }
  if(left > $(window).height()){
    left = $(window).height() - 500;
  }
  return [top, left];
}



$(document).ready(function(){
  var getDown;
  window.dancers = [];
  $(".lineUpButton").on("click", function(){
    
    clearInterval(getDown);
    var verticalOffset = 100;
    var horizOffset = 20;

    var topPos = 75;
    var leftPos = 150;

    for(var i = 0; i < dancers.length; i++){
    
      if (i % 10 === 0) {
        topPos = 100;
        leftPos = leftPos - 100;
      }

      dancers[i].goSomewhere(topPos,leftPos);
      topPos = topPos + verticalOffset;
      leftPos = leftPos + horizOffset;
    }
  });
//  return Math.floor(Math.random() * (max - min)) + min;

        var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // KABOOM !!!
  $(".makeCrazy").on("click", function() {
    
    var crazyMaker = function() {
      for (var i = 0; i < dancers.length; i++) {
        var topPos = makeRandomPosition()[0];
        var leftPos = makeRandomPosition()[1];

        //var topPos = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        //var leftPos = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        topPos, leftPos, 
        dancers[i].goSomewhere(topPos,leftPos, 800);
      }
    };

    crazyMaker();
    getDown = setInterval(function(){crazyMaker();}, 500);

    // for (var i = 0; i < 500; i++) {
    //   getDown();
    // }

  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      makeRandomPosition()[1], makeRandomPosition()[0],
      Math.random() * 1000
    );
    dancers.push(dancer);
    console.log('Adding dancer!');
    $('.dancerframe').append(dancer.$node);
  });
//CRAZY ADD LOTS OF SHIT BUTTON
  $(".crazyShit").on("click", function(event) {
    var randomDancer = function() {
      var dancerArray = ['AlienDancer','BlinkyDancer','KungFuKitty']; // Name dancer functions here
      var rando = Math.floor(Math.random() * dancerArray.length);
      return dancerArray[rando];
    };



    for (var i = 0; i < 20; i++) {
    var getDancer = randomDancer();
    var dancerMakerFunction = window[getDancer];      
      var dancer = new dancerMakerFunction(
        makeRandomPosition()[1], makeRandomPosition()[0],
        Math.random() * 1000);
      $('.dancerframe').append(dancer.$node);
      dancers.push(dancer);
      
      // var dancer = new AlienDancer(
      //   makeRandomPosition()[1], makeRandomPosition()[0],
      //   Math.random() * 1000
      // );
      // $('.dancerframe').append(dancer.$node);
      // dancers.push(dancer);
      // };
    }
  });
});

