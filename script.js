document.getElementById("username").addEventListener("input", updateLink);
document.getElementById("message").addEventListener("input", updateLink);



function updateLink() {
    var username = document.getElementById("username").value.trim();
    var message = document.getElementById("message").value.trim();
    var firstWord = message.substring(0,5);
    var firstWord = firstWord.replace(/ .*/,'');
    message = message.replace(/ /g, "%20");
    var domain = "https://m.me/";
    var param = "?text=";
    var ell = "...";
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
        link.href = domain + username;
        link.innerText = domain + username.substring(0,5) + ell;
        linkTxt.href = domain + username + param + message;
        linkTxt.innerText = domain + username.substring(0,3) + ell + param + firstWord.substring(0,3) + ell;
    }
} 

function copyToClipboard() {
    var username = document.getElementById("username").value.trim();
    var message = document.getElementById("message").value.trim();
    message = message.replace(/ /g, "%20");
    var domain = "https://m.me/";
    var param = "?text=";
    var url = domain + username;
    var urlTxt = url + param + message;
    navigator.clipboard.writeText(urlTxt);
    //alert("Copied > " + urlTxt);
}

function toggleButtonVisibility() {
    var username = document.getElementById("username").value.trim();
    var message = document.getElementById("message").value.trim();
    var copy = document.getElementById("copy");
    if (username !== "" && message !== "") {
        copy.style.display = "block";
    } else {
        copy.style.display = "none";
    }
}
