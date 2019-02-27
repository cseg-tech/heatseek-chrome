'use strict';

function loginTab() {
  chrome.tabs.create({
    url: 'https://app.heatseek.org/users/sign_in'
  });
}

function sensorTab() {
  var sensorURL = chrome.extension.getURL('sensor.html');
  chrome.tabs.create({url: sensorURL});
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-button').addEventListener('click', loginTab);
  document.getElementById('sensor-button').addEventListener('click', sensorTab);
});
