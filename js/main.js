$(function() {
  
  /*hover cursor over unselected square shows player marker.
  **Clicking unselected square applies player marker to square
  **and unbinds all events from chosen square element. */
  $(".square").click(function() {
    $(this).html("<span>X</span>").unbind();
  }).mouseenter(function() {
    $(this).html("<span>X</span>");
  }).mouseleave(function() {
    $(this).html("");
  });
});