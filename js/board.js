var Board = (function() {
  var board = document.querySelector(".board"),
      chosenSquare,
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
    /* get number of selected square from the second element 
       of the div's classList */
    console.log("Player chose square #" + e.target.classList[1] + ".");
  }

  return {
    setMarker: setMarker
  };
})();
