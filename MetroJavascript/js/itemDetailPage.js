﻿(function () {
    "use strict";

    var ui = WinJS.UI;
    var utils = WinJS.Utilities;

    ui.Pages.define("/html/itemDetailPage.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = options.item;
            element.querySelector(".titlearea .pagetitle").textContent = item.group_title;
            element.querySelector("article .item-title").textContent = item.title;
            element.querySelector("article .item-subtitle").textContent = item.brand;
            element.querySelector("article .item-image").src = item.picture.largeImg;
            element.querySelector("article .item-image").alt = item.title;
            element.querySelector("article .item-content").innerHTML = item.description;

            element.querySelector('article .buy').onclick = function () {
                window.open(item.url);
            }
            element.querySelector('article .add').onclick = function () {
                WPJS.EnsureAuth(function (result) {

                });
            }
        }
    })
})();
