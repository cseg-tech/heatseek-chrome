'use strict';

function loginTab() {
  chrome.tabs.create({
    url: 'https://app.heatseek.org/users/sign_in'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('heatseek-app').addEventListener('click', loginTab);
});
