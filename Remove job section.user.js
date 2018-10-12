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

function removeHireme() {
    var element = $("#hireme");
    if (element.length >= 1){
        element.remove();
    }
};
function removeGoogleAd()
{
    $('<style type="text/css">#google_image_div {display: none;}</style>')
        .appendTo($('head'));
};
function removeNewContributor() {
    $('<style type="text/css">.new-contributor-indicator {display: none;}</style>')
        .appendTo($('head'));
};
function removeAftercommentFlagPopUp()
{
    var elm = $(".js-stacks-managed-popup");
    if (elm.length >= 1){
        $(".js-stacks-managed-popup").remove();
    }
}
$(document).ready(function() {
    removeHireme();
    removeNewContributor();
    removeAftercommentFlagPopUp();

});
