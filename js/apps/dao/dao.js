require.config(requireConfig);
define(function(require, exports, module) {
	var utils = require('common');

	var dao = {};
	dao.getLocationList = function() {
		return utils.get('../../../json/location.json', function(data) {
			return data
		});
	};
	dao.getScrollPicList = function() {
		return utils.get('../../../json/pic-scroll.json', function(data) {
			return data
		});
	};
	dao.getCountCompanyNum = function() {
		return utils.get('../../../json/count-company.json', function(data) {
			return data
		});
	};
	dao.getPoliceNewsList = function() {
		return utils.get('../../../json/policy-news.json', function(data) {
			return data
		});
	};
	dao.getLawList = function() {
		return utils.get('../../../json/law-list.json', function(data) {
			return data
		});
	};
	dao.getHandleAffairsList = function() {
		return utils.get('../../../json/handle-affairs.json', function(data) {
			return data
		});
	};
	dao.getHotAffairsList = function() {
		return utils.get('../../../json/hot-affairs.json', function(data) {
			return data
		});
	};
	dao.getWantedPlaceList = function() {
		return utils.get('../../../json/find-place-list.json', function(data) {
			return data
		});
	};
	dao.getLoanBankList = function() {
		return utils.get('../../../json/loan-bank-info.json', function(data) {
			return data
		});
	};
	dao.getApplyRecordList = function() {
		return utils.get('../../../json/apply-record.json', function(data) {
			return data
		});
	};
	dao.getQuickFindSlideList = function() {
		return utils.get('../../../json/quick-find.json', function(data) {
			return data
		});
	};
	dao.getSelfFinancingSlideList = function() {
		return utils.get('../../../json/self-financing.json', function(data) {
			return data
		});
	};
	return dao;
});