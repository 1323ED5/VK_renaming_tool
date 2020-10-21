"use strict";

function replace(items) {
    for (let key of Object.keys(items)) {
        let element = document.getElementById(key);
        if (element !== null) {
            element = element.getElementsByClassName("left_label inl_bl")[0]
            element.innerHTML = items[key];
        }
    }
}

function main() {
    chrome.storage.local.get(
        ['keywords'],
        (keys) => chrome.storage.local.get(keys.keywords, replace)
    );
}

main();
