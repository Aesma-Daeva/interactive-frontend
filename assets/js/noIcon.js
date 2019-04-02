/*
This function was created as a replacement for img alt attribute.
So if there is no icon shown for weather icon, this error message
will show instead. I don't want to put alt attribute because it is
always showing on the  html page and I can't hide it.
*/
function noIcon () {
    document.getElementsByClassName("iconError").innerHTML = "The icon has gone with the wind.";
}

document.getElementsByClassName("weatherIcon").onerror = function() {noIcon()};