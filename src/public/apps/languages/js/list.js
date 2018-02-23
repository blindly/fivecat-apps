function learn_languages() {
  document.addEventListener('DOMContentLoaded', function () {
    var language = getQueryVariable("language");
    var fromCookie = getCookie("language");
    if ((language) && (language != fromCookie)) setCookie("language", language, 3);
    if (language) url = "https://api.fivecat.xyz/api/index.php/languages/all/" + language;
    else url = "https://api.fivecat.xyz/api/index.php/languages/all";
    $.getJSON(url, function (json) {
      if (json.status === 'ok') {
        let translations = json.data_array;
        $.each(translations, function (key) {
          let translation = translations[key].translation;
          let original = translations[key].original;
          let translationPhonetic = translations[key].translationPhonetic;
          //let article = "<article><p>" + translation + " : " + original + "</p></article>";
          
          let row = "<tr><td>" + translation + "</td><td>" + original + "</td></tr>";
          
          $('#languages').append(row);
        });
      }
    });
  }, false);
}
learn_languages();