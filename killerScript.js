console.log("welcome");
console.log(location.href);
const qustionUrl = "https://www.chegg.com/homework-help/expertquestion";
const captchaUrl = "https://www.chegg.com/recaptcha?recaptcha_redirect_url=https://www.chegg.com/homework-help/expertquestion&invalid_captcha_return_url=https://www.chegg.com/my/expertqa";

if (location.href == qustionUrl) {
    console.log("Check if there is a question or not");
    chrome.runtime.sendMessage({ redirect: qustionUrl, load: true });
}else if (location.href == captchaUrl){
    console.log("redirect to qustion url")
    chrome.runtime.sendMessage({ redirect: qustionUrl , load: true});
}