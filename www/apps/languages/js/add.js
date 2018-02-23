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
        languageFrom: languageFrom
        , original: original
        , languageTo: languageTo
        , translation: translation
        , phonetic: phonetic
      };
      console.log(data);      
      var request = $.post(url, data);
      
      console.log( request );
      
    });

  }, false);