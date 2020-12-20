"use strict";

chrome.storage.local.get(result => {
    for (let field of result.settings) {
        let element = document.getElementById(field.id);
        if (element) {
            element = element.getElementsByClassName("left_label inl_bl")[0]
            element.innerHTML = field.value;
        }
    }
});
