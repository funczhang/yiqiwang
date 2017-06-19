;(function(){
	var record = setInterval(function(){
		autoMoveList($('.apply-record-ul'),$('.apply-record-ul li:first'));
	},1500);

	function autoMoveList(parent,child){
		var $parent = parent,
		    $li = child;
		    height = $li.css('height');
		    marginBottom = $li.css('marginBottom');
		    marginTop = $li.css('marginTop');
		    paddingTop = $li.css('paddingTop');
		    paddingBottom = $li.css('paddingBottom');
		    borderBottom = $li.css('borderBottom');
		$li.animate(
			{
				height:0,
				marginBottom:0
			},500,function(){
				$li.css({
					'height':height,
					'marginBottom':marginBottom,
					'marginTop':marginTop,
					'paddingTop':paddingTop,
					'paddingBottom':paddingBottom,
					'borderBottom':borderBottom

				});
				$li.appendTo($parent);
		});
	}	

	$(document).on('mouseenter mouseleave','.apply-record-ul',function(event){
		if(event.type == 'mouseenter'){
			clearInterval(record);
		}
		if(event.type == 'mouseleave'){
			record = setInterval(function(){
				autoMoveList($('.apply-record-ul'),$('.apply-record-ul li:first'));
			},2000);
		}
	});
})();