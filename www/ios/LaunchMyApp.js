"use strict";

function handleOpenURL(url) {
  setTimeout(function() {
    alert(url);
    setTimeout(function() {
      window._openURL = url;
    }, 3000);
  }, 0);
}
