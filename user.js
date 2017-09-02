// ==UserScript==
// @name         Digitally Imported Ads Remover
// @namespace    http://mental.nv/
// @version      2017.08.001
// @description  Remove ads from the www.di.fm
// @include      http://www.di.fm*
// @include      http://www.di.fm/*
// @include      https://www.di.fm*
// @include      https://www.di.fm/*
// @author       Mental-NV (Ruslan Galiev)
// @match        http://www.di.fm/*
// @icon         http://i.imgur.com/7yj2PGY.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        // mute ads in the songs
        if (jQuery("div.track-title").text().trim() == "DI.fm" || jQuery("div.track-title").text().trim() == "Sponsored Message") {
            $("div.icon-mute").click();
        } else {
            $("div.icon-sound").click();
        }
    }, 100);

    setInterval(function(){
        // Removing Premium ad display
        jQuery('.premium-upsell').remove();
        jQuery('.menu-item.go-premium').remove();
        jQuery('.sidebar-ad-component').remove();

        // Breaking anti AFK system
        jQuery('.modal-btn.continue').click();
        jQuery('.modal-btn.countdown-btn').click();
    }, 1000);
})();