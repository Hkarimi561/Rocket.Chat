Package.describe({
	name: 'rocketchat:message-attachments',
	version: '0.0.1',
	summary: 'Widget for message attachments',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'templating',
		'ecmascript',
		'rocketchat:lib',
		'rocketchat:lazy-load',
		'rocketchat:e2e',
		'rocketchat:ui-message',
	]);
	api.mainModule('client/index.js', 'client');
});
