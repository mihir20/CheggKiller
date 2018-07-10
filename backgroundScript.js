
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.load){
        chrome.tabs.update(sender.tab.id, { url: request.redirect });
    }else{
        var audio = new Audio();
        audio.src = "./notification_sound.mp3"
        audio.play();
    }
});