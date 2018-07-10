const qustionUrl = "https://www.chegg.com/homework-help/expertquestion";
const captchaUrl = "https://www.chegg.com/recaptcha?recaptcha_redirect_url=https://www.chegg.com/homework-help/expertquestion&invalid_captcha_return_url=https://www.chegg.com/my/expertqa";
const noQuesText = "Unfortunately, there are no questions available in your queue for the moment"

if (location.href == qustionUrl) {
    if(document.body.innerText.search(noQuesText)>0){
        chrome.runtime.sendMessage({ redirect: qustionUrl, load: true });
    }else{
        console.log("kaam ho raha hai")
    }
}else if (location.href == captchaUrl){
    chrome.runtime.sendMessage({ redirect: qustionUrl , load: true});
}