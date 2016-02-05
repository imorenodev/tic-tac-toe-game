var Modal = (function() {
  var modal = document.querySelector(".modal");
  var chosenMarker = document.querySelector(".modal");

  function open() {
    modal.className = modal.className + " open";

    chosenMarker.addEventListener("click", function(e) {
    	
    	if (e.target !== e.currentTarget && e.target.tagName !== "P") {
    		modal.className = "modal";
    		console.log(e.target.tagName);
    	}
      e.stopPropagation;
    }, false);
  }

  function close() {
  	modal.className = "modal";
  }

	return {
		init: open,
		close: close
	};
})();