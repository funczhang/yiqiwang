require.config(requireConfig);
define(function(require, exports, module) {
	var $ = require('jquery');
	var utils = {};
	utils.get = function(url, handler, dataType, data) {
		var dtd = $.Deferred(),
			datas;
		$.ajax({
			url: url,
			data: data || {},
			dataType: dataType || 'json',
			type: 'GET',

		}).done(function(data) {
			datas = handler ? handler(data) : data;
			dtd.resolve(datas);
		}).fail(function() {
			dtd.reject(datas);
		});
		return dtd.promise();
	};
	return utils;
});