var Modal = (function() {
  var $modal = $(".modal");

  function open() {
  	alert("Modal Open");
  }

	return {
		init: open
	};
})();