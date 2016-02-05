var Modal = (function() {
  var modal = document.querySelector(".modal");

  function open() {

    modal.className = modal.className + " open";
    console.log(modal.className);
  }

	return {
		init: open,
		close: close
	};
})();