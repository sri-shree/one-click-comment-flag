// ==UserScript==
// @name         Remove job section
// @namespace    https://github.com/sri-shree/Remove-job-section-from-SO-site/raw/master/Remove%20job%20section.user.js
// @version      0.1
// @description  Hides the job section
// @author       Shree: https://stackoverflow.com/users/965146/shree
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

function removehireme() {
    "use strict";
    var bs = document.getElementById("hireme")
    bs.remove();
};

$(document).ready(function() {
  removehireme();
});
