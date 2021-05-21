// ==UserScript==
// @name         Hide job section / Hide New Contributor Indicator
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

function CheckCommentflag(){

    $(document).ajaxComplete(function(event, jqXHR, options) {


        if (options.type === 'GET' && /\/flags\/comments\/\d+\/popup/.test(options.url)) {
            let remainFlag = $('.js-modal-dialog').find('div.fc-light').text().split(' ')[2];
            alert(remainFlag);
            $('.js-modal-initial-focus').removeClass('js-modal-initial-focus');
            $('#comment-flag-type-CommentNoLongerNeeded')
                .click()
                .focus()
                .addClass('js-modal-initial-focus')
                .closest('.js-modal-dialog')
                .find('button.js-modal-submit')
                .prop('disabled', null);


            $('.js-modal-dialog').find('button.js-modal-submit').trigger('click');

        }

    });

}

function removeNewContributor() {
    //  $(".new-contributor-indicator").css({ "display" : "none" });
    $('<style type="text/css">.new-contributor-indicator {display: none;}</style>')
        .appendTo($('head'));
};

$(function() {
    removeNewContributor();
    CheckCommentflag();

});

  //  $(".new-contributor-indicator").css({ "display" : "none" });
    $('<style type="text/css">.new-contributor-indicator {display: none;}</style>')
    .appendTo($('head'));
};

$(function() {
    removeHireme();
    removeNewContributor();
    removeGoogleAd();

});
