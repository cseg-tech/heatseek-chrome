'use strict';

// Opens login page of Heat Seek's user app
function loginTab() {
  chrome.tabs.create({
    url: 'https://app.heatseek.org/users/sign_in'
  });
}

// Opens a new tab for sensor setup page
function sensorTab() {
  var sensorURL = chrome.extension.getURL('sensor.html');
  chrome.tabs.create({url: sensorURL});
}

// Add functions to buttons after DOM finishes loading
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-button').addEventListener('click', loginTab);
  document.getElementById('sensor-button').addEventListener('click', sensorTab);
});