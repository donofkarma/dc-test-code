"use strict";

var Utils = function() {};


Utils.prototype.createCookie = function(name, value, days) {

    var date = new Date();
    var expires = '';

    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';

};


Utils.prototype.readCookie = function(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return null;
};


Utils.prototype.eraseCookie = function(name) {
    this.createCookie(name, '', -1);
};


module.exports = Utils;
