var Board = (function() {
  var board = document.querySelector(".board");
  var square;
  var marker;


  function init() {

  }

  function setMarker(chosenMarker) {
    marker = chosenMarker;
    console.log(marker);
  }

  return {
    init: init,
    setMarker: setMarker
  };
})();
