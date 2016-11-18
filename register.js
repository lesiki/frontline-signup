var Register = function() {
	var
	bindIndustryListListeners = function() {
		$('input[name=industry]').change(handleIndustryChange);
		$('div.list-group-item').click(handleIndustryListGroupItemClick);
	},
	handleIndustryChange = function(evt) {
		$('div.list-group-item.active').removeClass('active');
		$(this).closest('.list-group-item').addClass('active');
	};
	handleIndustryListGroupItemClick = function(evt) {
		if($(this).hasClass('learn-more')) {
			// suppress selection if the user clicked on 'learn more'
			return;
		}
		evt.stopImmediatePropagation();
		$(this).find('input[type=radio]').prop('checked', true).change();
	},
	init = function() {
		bindIndustryListListeners();
	};
	return { init: init };
},
register;
$(function() {
	register = new Register();
	register.init();
});
