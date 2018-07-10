
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.load){
        chrome.tabs.update(sender.tab.id, { url: request.redirect });
    }
});