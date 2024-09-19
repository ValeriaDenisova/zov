//Button

document.addEventListener("DOMContentLoaded", function(){
    
function ChatbotPhone(element1, element2) {
    if (element1.style.display == "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}

function Hint() {
    hint.style.display = "block";
}

function HintEnd(e) {
    hint.style.display = "none";
}


var chatbot = document.getElementById('chatbot');
var phone = document.getElementById('phone');
var phoneHint = document.getElementById('phoneHint');
var chatbotHint = document.getElementById('chatbotHint');
var hint = document.getElementById('hint');
var buttonChatbot = document.getElementById('buttonChatbot');

setInterval(ChatbotPhone, 8000, chatbot, phone);
setInterval(ChatbotPhone, 8000, phoneHint, chatbotHint);
if(typeof buttonChatbot == 'object'){buttonChatbot.addEventListener('mouseover', Hint)};
if(typeof buttonChatbot == 'object'){buttonChatbot.addEventListener('mouseout', HintEnd)};
});
