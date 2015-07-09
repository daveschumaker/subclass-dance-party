$(document).ready(function(){
  window.dancers = [];
  $(".lineUpButton").on("click", function(){
    var verticalOffset = 100;
    var horizOffset = 20;

    var topPos = 100;
    var leftPos = 50;

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

  $(".makeCrazy").on("click", function() {
    
    var CrazyMaker = function() {
      for (var i = 0; i < dancers.length; i++) {
        topPos = $("body").height() * (Math.random());
        leftPos = $("body").width() * (Math.random());
        dancers[i].goSomewhere(topPos,leftPos, 800);
      }
    };

    CrazyMaker();

    //for (var i = 0; i < 50; i++) {
      setInterval(function() {
        CrazyMaker();
      }, 500);
    //}

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
      $("body").height() * (Math.random()),
      $("body").width() * (Math.random()),
      Math.random() * 1000
    );
    dancers.push(dancer);
    console.log('Adding dancer!');
    $('body').append(dancer.$node);
  });

  $(".crazyShit").on("click", function(event) {

    for (var i = 0; i < 100; i++) {

      var dancer = new BlinkyDancer(
        $("body").height() * (Math.random()),
        $("body").width() * (Math.random()),
        Math.random() * 1000);
      $('body').append(dancer.$node);
      dancers.push(dancer);


      var dancer = new AlienDancer(
        $("body").height() * (Math.random()),
        $("body").width() * (Math.random()),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancers.push(dancer);
      };


  });
});

