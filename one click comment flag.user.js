// ==UserScript==
// @name        Tick NLN comment option by default
// @namespace    https://github.com/sri-shree/Remove-job-section-from-SO-site
// @version      0.1
// @description  Hide job section
// @author       Shree: https://stackoverflow.com/users/965146/shree
// @grant          none
// @include /^https?:\/\/(.*\.)?stackoverflow\.com/.*$/
// ==/UserScript==

function Tick_NLN_CommentOption(){

    $(document).ajaxComplete(function(event, jqXHR, options) {

        if (options.type === 'GET' && /\/flags\/comments\/\d+\/popup/.test(options.url)) {
            let remainFlag = $('.js-modal-dialog').find('div.fc-light').text().split(' ')[2];
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


$(function() {
    Tick_NLN_CommentOption();
});
