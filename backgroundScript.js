
chrome.runtime.onMessage.addListener(function (req, sender) {
    if (req.load){
        chrome.tabs.update(sender.tab.id, { url: req.redirect });
    }else{
        var audio = new Audio();
        audio.src = "./notification_sound.mp3";
        audio.play();
    }
});
