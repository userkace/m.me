function copyToClipboard() {
    var username = document.getElementById("username").value.trim();
    var text = document.getElementById("message").value.trim();
    text = text.replace(/ /g, "%20");
    var domain = "https://m.me/";
    var param = "?text=";
    var url = domain + username + param + text;
    navigator.clipboard.writeText(url);
    alert("Copied > " + url);
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

// Update the printed link as you type
document.getElementById("username").addEventListener("input", updateLink);
document.getElementById("message").addEventListener("input", updateLink);

function updateLink() {
    var username = document.getElementById("username").value.trim();
    var text = document.getElementById("message").value.trim();
    text = text.replace(/ /g, "%20");
    var domain = "https://m.me/";
    var param = "?text=";
    var url = domain + username;
    var urlTxt = url + param + text;

    // Update the link on the webpage
    var link = document.getElementById("link");
    var linkTxt = document.getElementById("linkTxt");
    
    if ((username === "")||(text === "")){
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
        linkTxt.innerText = urlTxt;
    }
} 