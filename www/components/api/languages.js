function learn_languages() {
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
      var div = "<blockquote class='align-center'>" + translation + " : "+ original +"</blockquote>";
      $('#quote').append(div);
    });
  }, false);
}

learn_languages();