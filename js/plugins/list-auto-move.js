require.config(requireConfig);
define(function(require, exports, module) {
	var $ = require('jquery');
	var autoLawList = setInterval(function() {
		// autoMoveList($('.law-ul'), $('.law-ul li:first'));
		// autoMoveList($('.apply-record-ul'), $('.apply-record-ul li:first'));
		autoMoveList($('#rentOutList'), $('#rentOutList li:first'));
	}, 2000);
	function autoMoveList(parent, child) {
		var $parent = parent,
			$li = child;
		height = $li.css('height');
		marginBottom = $li.css('marginBottom');
		marginTop = $li.css('marginTop');
		paddingTop = $li.css('paddingTop');
		paddingBottom = $li.css('paddingBottom');
		$li.animate({
			height: 0,
			marginBottom: 0
		}, 500, function() {
			$li.css({
				'height': height,
				'marginBottom': marginBottom,
				'marginTop': marginTop,
				'paddingTop': paddingTop,
				'paddingBottom': paddingBottom

			});
			$li.appendTo($parent);
		});
	}
	$(document).on('mouseenter mouseleave', '#rentOutList', function(event) {
		if (event.type == 'mouseenter') {
			clearInterval(autoLawList);
		}
		if (event.type == 'mouseleave') {
			autoLawList = setInterval(function() {
				autoMoveList($('#rentOutList'), $('#rentOutList li:first'));
			}, 2000);
		}
	});

});