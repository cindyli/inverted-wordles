"use strict";

/* global inverted_wordles */

const supportedLanguages = ["en", "fr"];
const defaultLanguage = "en";

const currentBrowserLang = navigator.language.split("-")[0];

const urlSearchParams = new URLSearchParams(window.location.search);
const userSelectedLang = urlSearchParams.get("lang");

// Global variable to keep track of the current language code
let currentLanguage = userSelectedLang ? userSelectedLang :
    supportedLanguages.includes(currentBrowserLang) ? currentBrowserLang : defaultLanguage;

// Global variable to keep track of all translations for the current selected language
let translations = inverted_wordles.languages[currentLanguage] || inverted_wordles.languages.en;

// Translate function
// Note: this function is dependent on a global variable `translations` that contains translated
// phrases for the current language.
inverted_wordles.t = function (key) {
    return translations[key] || `[Missing translation for ${key}]`;
};

inverted_wordles.updateLinkHref = function (el, currentLanguage) {
    const url = new URL(el.href);
    url.searchParams.set("lang", currentLanguage);
    el.href = url.toString();
};

document.addEventListener("DOMContentLoaded", function () {
    // Update dynamic contents with the proper language translations.
    // Note: this function depends on a properly-set global variable `translations`.
    // These special attributes with prefix `data-i18n-` are attached onto
    // those html elements whose contents need to be updated according to
    // the current selected language.
    // data-i18n-textcontent: update `textContent`
    // data-i18n-placeholder: update the value of the `placeholder` attribute
    // data-i18n-link: use for <a> links that lead to other pages. Their `href`
    //     URL needs to be updated by updating `lang=currentLanguage` in search
    //     parameters.
    // data-i18n-arialabel: update `aria-label` value
    inverted_wordles.handleI18nDataAttributes = function () {
        // find all elements with an attribute prefixed with "data-i18n-"
        const translatableElements = document.querySelectorAll("[data-i18n-textcontent], [data-i18n-placeholder], [data-i18n-link], [data-i18n-arialabel]");

        translatableElements.forEach(el => {
            const key = el.dataset.i18nTextcontent || el.dataset.i18nPlaceholder;
            const newly_translated = inverted_wordles.t(key);

            if (el.dataset.i18nTextcontent) {
                el.textContent = newly_translated;
            } else if (el.dataset.i18nPlaceholder) {
                el.placeholder = newly_translated;
            } else if (el.dataset.i18nAriaLabel) {
                el["aria-label"] = newly_translated;
            } else if (el.dataset.i18nLink === "") {
                // Note: as there isn't a value assigned to `data-i18n-link` attribute,
                // check its value === "" is required in order to have the check return true.
                inverted_wordles.updateLinkHref(el, currentLanguage);
            }
        });
    };

    // Toggle language
    const toggleEn = document.getElementById("toggle-en");
    const toggleFr = document.getElementById("toggle-fr");

    // Update language related attributes and values
    inverted_wordles.updateLangRelated = function (lang, clickedLink) {
        // Update toggle links
        clickedLink.setAttribute("aria-current", "page");
        const nonClickedLink = clickedLink === toggleEn ? toggleFr : toggleEn;
        nonClickedLink.removeAttribute("aria-current");

        // Update <html> tag to set proper "lang" value
        const htmlElement = document.documentElement;
        htmlElement.setAttribute("lang", lang === "en" ? "en-CA" : "fr-CA");

        // Update the page title to the current language translation
        const currentURL = window.location.href;

        if (currentURL.includes("/wordle/")) {
            document.title = inverted_wordles.t("view_wordle") + " | " + inverted_wordles.t("inverted_wordles");
        } else if (currentURL.includes("/answer/")) {
            document.title = inverted_wordles.t("answer_wordle_question") + " | " + inverted_wordles.t("inverted_wordles");
        } else {
            document.title = inverted_wordles.t("manage_wordles") + " | " + inverted_wordles.t("inverted_wordles");
        }
    };

    inverted_wordles.toggleLanguage = function (newLang, event) {
        event.preventDefault();
        // Update the global variable currentLanguage
        currentLanguage = newLang;

        // Load the translations for the new language
        translations = inverted_wordles.languages[currentLanguage] || inverted_wordles.languages.en;
        inverted_wordles.handleI18nDataAttributes();

        // Update the URL
        const url = new URL(window.location);
        url.searchParams.set("lang", currentLanguage);
        window.history.pushState({}, "", url.toString());

        // Update language related information
        inverted_wordles.updateLangRelated(newLang, event.target);
    };

    toggleEn.addEventListener("click", (event) => inverted_wordles.toggleLanguage("en", event));
    toggleFr.addEventListener("click", (event) => inverted_wordles.toggleLanguage("fr", event));

    // Initial actions at the page load:
    // 1. translation;
    // 2. Update language related information
    if (currentLanguage !== defaultLanguage) {
        inverted_wordles.handleI18nDataAttributes();
        inverted_wordles.updateLangRelated(currentLanguage, currentLanguage === "en" ? toggleEn : toggleFr);
    }
});
