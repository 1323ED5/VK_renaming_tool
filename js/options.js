function load_values() {
  chrome.storage.local.get(
    ['keywords'],
    (keys)=>chrome.storage.local.get(keys.keywords, add_values)
  );
}


function add_values(items) {
  for (let key of Object.keys(items)) {
    document.getElementById(key).value = items[key];
  }
}


function save() {
  let fields = document.getElementsByTagName("input");
  let settings = {'keywords': []}

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

  // add button "save"
  let button = document.createElement('button');
  button.innerHTML = "Сохранить";
  button.addEventListener('click', save);
  document.getElementsByTagName('body')[0].appendChild(button);
}

main();
