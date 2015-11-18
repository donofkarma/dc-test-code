/* jslint unused: false */

"use strict";

// Globals
window.jQuery = window.$ = require('jquery');

// Main app
window.DCTestCode = (function() {

    // Utils

    // Shared

    // Modules


    // DOM ready
    $(function() {

        if ($('body').hasClass('article')) {
            var $h1 = $('h1');
            var copy = $h1.text();

            $h1.html(copy.replace(/(\w+$)/, '<strong>$1</strong>'));
        }

    });

    // Page ready
    $(window).on('load', function() {
    });

})();
