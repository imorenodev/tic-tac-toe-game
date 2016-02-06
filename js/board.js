var Board = (function() {
  var board = document.querySelector(".board"),
      chosenSquares = [],
      playerMarker;


  function init() {
    board.addEventListener("click", selectSquare, false);
  }

  function setMarkers(chosenMarker) {
    playerMarker = chosenMarker;
    compMarker = playerMarker === "X" ? "O" : "X";

    console.log("The Player chose " + playerMarker + " as their marker.");
    console.log("The Computer's marker is " + compMarker + ".");
    
    init();
  }

  function selectSquare(e) {
    /* get number of selected square from the second element of
       the div's classList and push onto chosenSquares array */
    chosenSquares.push(e.target.classList[1]);
    console.log("Player chose square #" + e.target.classList[1] + ".");

    // add player's marker to chosen square  
    e.target.innerHTML = playerMarker;
  }

  return {
    setMarkers: setMarkers
  };
})();
