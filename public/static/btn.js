const url_input = document.getElementById("url-input");
const ai_dedstorage = localStorage.getItem("dedstorage");
const ai_storage = JSON.parse(ai_dedstorage);

$("#warp").click(function () {
  if (url_input.value.includes("https://" || url_input.value.includes("http://"))) {
    ai_storage.push(url_input.value);

    if (ai_storage.length > 5) {
      ai_storage.shift();
    }

    localStorage.setItem("dedstorage", JSON.stringify(ai_storage));
    location = "https://borgcube.codesalvageon.repl.co/u/" + url_input.value;
  }

  else {
    url_input.value = "https://" + url_input.value;
    ai_storage.push(url_input.value);

    if (ai_storage.length > 5) {
      ai_storage.shift();
    }

    localStorage.setItem("dedstorage", JSON.stringify(ai_storage));

    location = "https://borgcube.codesalvageon.repl.co/u/" + url_input.value;
  }
});

$("#vp").click(function () {
  $("#preview-modal").show();
});

$("#close-vp").click(function () {
  $("#preview-modal").hide();
});

if (ai_storage === null) {
  localStorage.setItem("dedstorage", "[]");
  ai_storage = [];
}

else {
  let preset_val1 = 0;
  let preset_val2 = 0;
  let preset_val3 = 0;
  let preset_val4 = 0;
  let preset_val5 = 0;

  for (i = 0; i < ai_storage.length; i++) {
    if (ai_storage[i] === ai_storage[0]) {
      preset_val1 = preset_val1 + 1;
    }

    else if (ai_storage[i] === ai_storage[1]) {
      preset_val2 = preset_val2 + 1;
    }

    else if (ai_storage[i] === ai_storage[2]) {
      preset_val3 = preset_val3 + 1;
    }

    else if (ai_storage[i] === ai_storage[3]) {
      preset_val4 = preset_val4 + 1;
    }

    else if (ai_storage[i] === ai_storage[4]) {
      preset_val5 = preset_val5 + 1;
    }
  }

  if (preset_val1 > preset_val2 && preset_val1 > preset_val3 && preset_val1 > preset_val4 && preset_val1 > preset_val5) {
    url_input.value = ai_storage[0];
  }

  else if (preset_val2 > preset_val1 && preset_val2 > preset_val3 && preset_val2 > preset_val4 && preset_val2 > preset_val5) {
    url_input.value = ai_storage[1];
  }

  else if (preset_val3 > preset_val1 && preset_val3 > preset_val2 && preset_val3 > preset_val4 && preset_val3 > preset_val5) {
    url_input.value = ai_storage[2];
  }

  else if (preset_val4 > preset_val1 && preset_val4 > preset_val2 && preset_val4 > preset_val3 && preset_val4 > preset_val5) {
    url_input.value = ai_storage[3];
  }

  else if (preset_val5 > preset_val1 && preset_val5 > preset_val2 && preset_val5 > preset_val3 && preset_val5 > preset_val4) {
    url_input.value = ai_storage[1];
  }

  else {
    url_input.value = ai_storage[0];
  }
}