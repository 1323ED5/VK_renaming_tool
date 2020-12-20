"use strict";

function save() {
    // onClick event for button "save"

    let fields = document.querySelectorAll('input[type="text"]');
    let params = [];

    for (let field of fields) {
        if (field.value !== "") {
            params.push({ "id": field.id, "value": field.value });
        }
    }

    chrome.storage.local.set({ "settings": params });
}

function main() {
    // loads values from storage to fields
    chrome.storage.local.get(result => {
        for (let field of result.settings) {
            document.getElementById(field.id).value = field.value;
        }
    });

    // Save on change
    let inputs = document.querySelectorAll('input[type="text"]');
    for (let input of inputs) {
        input.addEventListener('change', save);
    }
}

main();
