"use strict";

window._openURL = null;
function handleOpenURL(url) {
  setTimeout(function() {
    window._openURL = url;
  }, 0);
}

window._openUrl = null;
function handleOpenUrl(url) {
  setTimeout(function() {
    window._openUrl = url;
  }, 0);
}
