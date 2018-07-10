
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.captcha){
        chrome.tabs.update(sender.tab.id, { url: request.redirect });
    }
});