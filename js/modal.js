var Modal = (function() {
	// save modal element in variable
  var modal = document.querySelector(".modal");

  // public open function
  function open() {
  	/* add '.open' to modal class name and increase opacity to "1",
  	   making modal window visible */
    modal.className = modal.className + " open";
    
    // add event listener to modal element
    modal.addEventListener("click", chooseMarker, false);
  }
  function chooseMarker(e) {
	  /* only fire event if child elements (the markers) are clicked,
  	   exluding the <p> element */
  	if (e.target !== e.currentTarget && e.target.tagName !== "P") {
  		close();
  	}
  	/* stop event bubbling past parent div / modal element the 
  	   event listener is watching */
    e.stopPropagation();
  }
  function close() {
  	// change modal element class name back to "modal", opacity "0"
  	modal.className = "modal";
  }

	return {
		init: open,
		close: close
	};
})();