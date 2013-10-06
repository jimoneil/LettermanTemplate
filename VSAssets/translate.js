var langUtils = (function () {
    "use strict";

    var t = {};

    // set language for flyout
    t.setUILanguage = function (toLanguage) {

        // get the 'from' language
        var fromLanguage = (toLanguage === "native") ? "english" : "native";

        // show all elements of new language
        var elementsToShow = document.getElementsByClassName(toLanguage);
        for (var i = 0; i < elementsToShow.length; i++)
            elementsToShow[i].style.display = "inline";

        // hide all elements of old language
        var elementsToHide = document.getElementsByClassName(fromLanguage);
        for (var i = 0; i < elementsToHide.length; i++)
            elementsToHide[i].style.display = "none";
    };

    // set flyout in the current language
    t.init = function () {
        var isNativeLanguage = 1;

        // check that Construct 2 runtime is defined
        if (typeof cr_getC2Runtime !== "undefined") {

            // find global named "currentLanguage"
            var allGlobals = cr_getC2Runtime().all_global_vars;
            for (var i in allGlobals)
                if (allGlobals[i].name === "isNativeLanguage") {
                    isNativeLanguage = allGlobals[i].getValue();
                    break;
                }
        }
        t.setUILanguage(isNativeLanguage === 1 ? "native" : "english");
    };

    // required to allow function to be invoked in setting flyout event
    t.init.supportedForProcessing = true;

    return t;
}());