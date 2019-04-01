/*jslint browser:true */
function noIcon () {
    document.getElementsByClassName("iconError").innerHTML = "The icon has gone with the wind.";
}

document.getElementsByClassName("weatherIcon").onerror = function() {noIcon()};