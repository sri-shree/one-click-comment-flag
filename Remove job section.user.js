// ==UserScript==
// @name         Hide job section
// @namespace    https://github.com/sri-shree/Remove-job-section-from-SO-site
// @version      0.1
// @description  Hide job section
// @author       Shree: https://stackoverflow.com/users/965146/shree
// @grant          none
// @include /^https?:\/\/(.*\.)?stackoverflow\.com/.*$/
// @include /^https?:\/\/(.*\.)?serverfault\.com/.*$/
// @include /^https?:\/\/(.*\.)?superuser\.com/.*$/
// @include /^https?:\/\/(.*\.)?stackexchange\.com/.*$/
// @include /^https?:\/\/(.*\.)?askubuntu\.com/.*$/
// @include /^https?:\/\/(.*\.)?mathoverflow\.net/.*$/
// @include /^https?:\/\/discuss\.area51\.stackexchange\.com/.*$/
// @include /^https?:\/\/stackapps\.com/.*$/
// ==/UserScript==

function removehireme() {
    "use strict";
    var bs = document.getElementById("hireme")
    bs.remove();
};

$(document).ready(function() {
  removehireme();
});
