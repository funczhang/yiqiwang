require.config(requireConfig);
define(function(require,exports,module) {
	var $ = require('jquery');
	//----------------------页面中a添加title属性------------------------
	$(document).on('mouseenter', 'a', function() {
		var title = $(this).text();
		$(this).attr('title', title);
	});
	//--------------------下拉框----------------------------
	$(document).on('click', function(event) {
		var ev = event.target,
			area1 = $('#inputArea1')[0],
			area2 = $('#inputArea2')[0],
			area3 = $('#inputArea3')[0],
			area4 = $('#inputArea4')[0];
		loanArea1 = $('#inputLoanArea1')[0];
		loanArea2 = $('#inputLoanArea2')[0];
		loanArea3 = $('#inputLoanArea3')[0];
		function slide(area, classSelector, idSelector, classSelectorLi, selectedClass) {
			if (ev == area) {
				classSelector.show();
				idSelector.addClass(selectedClass);
				classSelectorLi.on('click', function() {
					var text = $(this).text();
					idSelector.text($(this).text());
				});
			} else {
				classSelector.hide();
				idSelector.removeClass(selectedClass);
			}
		}
		slide(area1, $('.select-place1'), $('#inputArea1'), $('.select-place1 li'), 'input-area-selected');
		slide(area2, $('.select-place2'), $('#inputArea2'), $('.select-place2 li'), 'input-area-selected');
		slide(area3, $('.select-place3'), $('#inputArea3'), $('.select-place3 li'), 'input-area-selected');
		slide(area4, $('.select-place4'), $('#inputArea4'), $('.select-place4 li'), 'input-area-selected');

		slide(loanArea1, $('.select-loan1'), $('#inputLoanArea1'), $('.select-loan1 li'), 'input-loan-selected');
		slide(loanArea2, $('.select-loan2'), $('#inputLoanArea2'), $('.select-loan2 li'), 'input-loan-selected');
		slide(loanArea3, $('.select-loan3'), $('#inputLoanArea3'), $('.select-loan3 li'), 'input-loan-selected');
	});

});