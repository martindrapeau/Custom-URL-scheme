"use strict";

function handleOpenURL(url) {
  setTimeout(function() {
    alert(url);
    setTimeout(function() {
      _openURL = url;
    }, 3000);
  }, 250);
}
function handleOpenUrl(url) {
  setTimeout(function() {
    alert(url);
    setTimeout(function() {
      _openUrl = url;
    }, 3000);
  }, 250);
}
