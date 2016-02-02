var Board = (function() {
  var $squares,
      picked;

  var init = function() {
    $squares = $(".square");
    picked = [];

    $squares.on("click", function(e) {
      $(e.target).html("X");
      var squareNum = e.target.classList[1];

      pickNum(squareNum);
    });
  }

  function pickNum(squareNum) {
    if (picked.indexOf(squareNum) === -1) {
      picked.push(squareNum);
      console.log('Added ' + squareNum + ' to picked');
    }
  }

  return {
    init: init
  };
})();

$(document).ready(Board.init());