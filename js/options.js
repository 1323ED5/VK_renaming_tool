"use strict";

function load_values() {
  // loads values from storage

  chrome.storage.local.get(
    ['keywords'],
    (keys) => chrome.storage.local.get(keys.keywords, add_values)
  );
}

function add_values(values) {
  // adds values to inputs

  for (let key of Object.keys(values)) {
    document.getElementById(key).value = values[key];
  }
}

function save() {
  // onClick event for button "save"

  let fields = document.getElementsByTagName("input");
  let settings = { 'keywords': [] }

  for (let field of fields) {
    if (field.value !== "") {
      settings['keywords'].push(field.id);
      settings[field.id] = field.value;
    }
  }

  chrome.storage.local.set(settings);
}

function main() {
  load_values();

  // adds button "save"
  let button = document.createElement('button');
  button.innerHTML = "Сохранить";
  button.addEventListener('click', save);
  document.getElementsByTagName('body')[0].appendChild(button);
}

main();
