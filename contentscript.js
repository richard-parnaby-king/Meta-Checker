/*
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */

//Get all meta tags
var metaTags=document.getElementsByTagName("meta");

//if any meta tags have the attribute name "robots" and either "noindex" or "nofollow" in the attribute contents,
//then send a message
//I'm sure there is a way to optimise this loop. Oh well.
for (var i = 0; i < metaTags.length; i++) {
	if (metaTags[i].getAttribute("name") == "robots") {
		var content = metaTags[i].getAttribute("content");
		var msg = "";
		if(content.toLowerCase().indexOf('noindex') > -1) {
			msg = "It looks like this page has a noindex. This means google will not index it";
		}

		if(content.toLowerCase().indexOf('nofollow') > -1) {
			msg = "It looks like this page has a nofollow. This means google will not crawl the website";
		}
		if(content.toLowerCase().indexOf('nofollow') > -1 && content.toLowerCase().indexOf('noindex') > -1) {
			msg = "It looks like this page has a noindex,nofollow. This means google will not crawl the website or index it";
		}

		if(msg.length > 0) {
			chrome.extension.sendMessage(msg);
		}
	}
}