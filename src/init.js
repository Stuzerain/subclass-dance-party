$(document).ready(function() {
  window.spaceEagles = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    if (dancer.$node.hasClass('eagle_dancer') ) {
      window.spaceEagles.push(dancer);
    }
  });


  $('.lineUpButton').on('click', function(event) {
    // some code
    var dancers = document.getElementsByClassName('dancer');
    for (var i = 0; i < dancers.length; i++) {
      $(dancers[i]).css({top: '50%', left: 100 + (100 * i)});
    }
  });

  $('body').on('click', '.eagle_dancer', function() {
    spaceEagles[0].moving = !spaceEagles[0].moving;

    // TODO - mouse follow
    // set up boolean--clicking once causes eagle to follow, clicking again sets boolean to false and it stops following
    // select eagle in variable to work with
    if (spaceEagles[0].moving === true) {
      $('body').bind('mousemove', function(event) {
        $('.eagle_dancer').css({
          top: event.pageY - 100,
          left: event.pageX - 100
        });
      });

    }

    if (spaceEagles[0].moving === false) {
      $('body').off('mousemove');
      $('body').off('mouseover');
    }
  });

});


