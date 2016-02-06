var Board = (function() {
  var board = document.querySelector(".board"),
      chosenSquares = [],
      marker;


  function init() {
    console.log("Player chose " + marker + " as their marker.");
    board.addEventListener("click", selectSquare, false);
  }

  function setMarker(chosenMarker) {
    marker = chosenMarker;

    init();
  }

  function selectSquare(e) {
    /* get number of selected square from the second element of
       the div's classList and push onto chosenSquares array */
    chosenSquares.push(e.target.classList[1]);
    console.log("Player chose square #" + e.target.classList[1] + ".");
    e.target.innerHTML = marker;
  }

  return {
    setMarker: setMarker
  };
})();
