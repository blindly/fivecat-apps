function list_translations() {
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
          
          let row = "<tr><td>" + translation + "</td><td>" + original + "</td><td>" + translationPhonetic +"</td></tr>";
          
          $('#languages').append(row);
        });
      }
    });
  }, false);
}

function random_translation() {
  document.addEventListener('DOMContentLoaded', function () {
    
    var language = getQueryVariable("language");
    var fromCookie = getCookie("language");
    
    if ( ( language ) && ( language != fromCookie ) )
      setCookie("language", language, 3);
    
    if (language)
      url = "https://api.fivecat.xyz/api/index.php/languages/random/" + language;
    else
      url = "https://api.fivecat.xyz/api/index.php/languages/random";
      
    $.getJSON(url, function (json) {
      var translation = json.translation;
      var original = json.original;
      var phonetic = json.phonetic;
      
      $('#translation').html(translation);
      $('#phonetic').html( String(phonetic) );
      $('#translation').attr("title", phonetic);

      $('#original').html(original);
      
    });
  }, false);
}

function add_translation() {
  document.addEventListener('DOMContentLoaded', function () {
    $(document).on("submit", "form", function (e) {
      e.preventDefault();
      var url = "https://api.fivecat.xyz/api/index.php/languages/add";
      var languageFrom = $("#languageFrom").val();
      var original = $("#original").val();
      var languageTo = $("#languageTo").val();
      var translation = $("#translation").val();
      var phonetic = $("#phonetic").val();
      var data = {
        languageFrom: languageFrom,
        original: original,
        languageTo: languageTo,
        translation: translation,
        phonetic: phonetic
      };
      var request = $.post(url, data);
      
      document.getElementById("learnNew").reset();
    });
  }, false);
}