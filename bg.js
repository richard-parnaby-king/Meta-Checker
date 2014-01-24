/**
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */
chrome.extension.onMessage.addListener(function(msg,sender,sendResponse) {
	chrome.notifications.create(
		'', //create new notification id
		{
			type: 'basic',
			iconUrl: 'meta-fail.png',
			title: 'Meta Robots Checker',
			message: msg,
			priority: 0
		},
		function() {}
	);	
});