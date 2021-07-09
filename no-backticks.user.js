// ==UserScript==
// @name         No backticks
// @namespace    https://wordpress.org
// @version      0.1
// @description  Turns off automatic backtick add on paste in w.org
// @author       All of us
// @match        https://wordpress.org/support/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    jQuery('#new-post textarea').off('paste');
})();
