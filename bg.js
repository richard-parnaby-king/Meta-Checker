/**
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */
var notifications = {};
chrome.extension.onMessage.addListener(function(msg,sender,sendResponse) {
	chrome.notifications.create(
		'', //create new notification id
		{
			type: 'basic',
			iconUrl: 'meta-fail.png',
			title: 'Meta Robots Checker',
			message: msg,
            contextMessage: sender.tab.title,
			priority: 0,
            isClickable: true
		},
		function(notificationId) {
            notifications[notificationId] = sender.tab.id;
        }
	);
    chrome.notifications.onClicked.addListener(function(notificationId){
        chrome.tabs.update(notifications[notificationId], {active: true});
    });
});