$(document).ready(function () {
  $(".hero-animation-container").each(function () {
    var $this = $(this); //get thecurrent slider
    var $group = $this.find(".hero-slide-group"); // get the slide group container
    var $slides = $this.find(".hero-slide"); // jquery obdject to hold all the slides
    var buttonArray = []; // creat an array to hold nav buttons
    var currentIndex = 0;
    var timeout; // use to store timer

    function move(newIndex) {
      // create the slide from old to new one
      var animateLeft, slideleft; // variable declared

      advance(); // when slides moves, call advance() again

      //if current slide is showing or slide is animating, then do nothing

      if ($group.is(":animated") || currentIndex === newIndex) {
        return;
      }
      buttonArray[currentIndex].removeClass(`active`); // remove class form item
      buttonArray[newIndex].addClass(`active`); //add class to new item

      if (newIndex > currentIndex) {
        // if new item > current
        slideleft = "100%"; // sit the new slide to right
        animateLeft = "-100%"; // animate the current group to the left
      } else {
        //otherwise
        slideleft = "-100%"; //sit the new slide to the left
        animateLeft = "100%"; // animate the current group to the right
      }

      // Position new slide to the left (if less) or right (if more) of current

      $slides.eq(newIndex).css({ left: slideleft, display: "block" });
      $group.animate({ left: animateLeft }, function () {
        $slides.eq(currentIndex).css({ display: "none" }); // hides previous slide
        $slides.eq(newIndex).css({ left: 0 }); //set position of the new item
        $group.css({ left: 0 }); //set position of group of slide
        currentIndex = newIndex; //set current to new image
      });
    }

    function advance() {
      clearTimeout(timeout); // clear timer store in timeout

      // start timer to run an annonymous function every 4 sec
      timeout = setTimeout(function () {
        if (currentIndex < $slides.length - 1) {
          //if not last slide
          move(currentIndex + 1); //move to next slide
        } else {
          move(0); //otherwise move to first slide
        }
      }, 4000); // millisecond timer will wait
    }

    $.each($slides, function (index) {
      //create a button element for the button
      var $button = $(
        '<button type="button" class="slide-btn">&bull;</button>'
      );
      if (index === currentIndex) {
        // if the index is the current item
        $button.addClass("active"); // add the active class
      }
      $button
        .on("click", function () {
          // create event listener for the button holder
          move(index); // it call the move function
        })
        .appendTo($this.find(".hero-slide-btn")); // add to the button holder
      buttonArray.push($button);
    });

    advance(); // script is set up, call advance() to move it
  });
});
