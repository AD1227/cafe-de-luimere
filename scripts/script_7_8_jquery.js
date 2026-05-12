$(document).ready(function () {
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    var filter = $(this).data("filter");

    if (filter == "all") {
      // this line of code shows all the table
      $(".table-menu").fadeIn(300);
    } else {
      //this 2 line of code hides all and only show the one with match
      $(".table-menu").hide();
      $("#" + filter).fadeIn(300);
    }
  });
});
