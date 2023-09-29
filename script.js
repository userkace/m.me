document.getElementById("username").addEventListener("input", updateLink);
document.getElementById("message").addEventListener("input", updateLink);

var username = document.getElementById("username").value.trim();
var message = document.getElementById("message").value.trim();
message = message.replace(/ /g, "%20");
var domain = "https://m.me/";
var param = "?text=";
var url = domain + username;
var urlTxt = url + param + message;

function updateLink() {
    var username = document.getElementById("username").value.trim();
    var message = document.getElementById("message").value.trim();
    var firstWord = message.replace(/ .*/,'');
    message = message.replace(/ /g, "%20");
    var domain = "https://m.me/";
    var param = "?text=";
    var url = domain + username;
    var urlTxt = url + param + message;
    var urlAlt = url + param + firstWord + "...";
    // Update the link on the webpage
    var link = document.getElementById("link");
    var linkTxt = document.getElementById("linkTxt");
    
    if ((username === "")||(message === "")){
        link.style.setProperty('--text-decoration', 'none');
        linkTxt.style.setProperty('--text-decoration', 'none');
        link.href = "";
        link.innerText = "start typing!";
        linkTxt.href = "";
        linkTxt.innerText = "";
    } else {
        link.style.setProperty('--text-decoration', 'underline');
        linkTxt.style.setProperty('--text-decoration', 'underline');
        link.href = url;
        link.innerText = url;
        linkTxt.href = urlTxt;
        linkTxt.innerText = urlAlt;
    }
} 

function copyToClipboard() {
    navigator.clipboard.writeText(urlTxt);
    alert("Copied > " + urlTxt);
}

function toggleButtonVisibility() {
    var copy = document.getElementById("copy");
    if (username !== "" && message !== "") {
        copy.style.display = "block";
    } else {
        copy.style.display = "none";
    }
}

// Update the printed link as you type
