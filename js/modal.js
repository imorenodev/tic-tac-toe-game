var Modal = (function() {
  var $modal = $(".modal");

  function open() {
  	$.ajax("modal.html", {dataType: "text"})
  	  .then(function(contents) {
  	  	$modal.html(contents).show();
  	  });
  }

	return {
		init: open
	};
})();