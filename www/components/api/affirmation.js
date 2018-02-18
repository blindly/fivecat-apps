function get_affirmation() {
  document.addEventListener('DOMContentLoaded', function () {
    
    var category = getQueryVariable("affirmation");
    var fromCookie = getCookie("affirmation");
    
    if ( ( category ) && ( category != fromCookie ) )
      setCookie("affirmation", category, 3);
    
    if (category)
      url = "https://api.fivecat.xyz/api/index.php/affirmation/random/" + category;
    else
      url = "https://api.fivecat.xyz/api/index.php/affirmation/random";
      
    $.getJSON(url, function (json) {
      var affirmation = json.affirmation;
      var div = "<blockquote class='align-center'>" + affirmation + "</blockquote>";
      $('#affirmation').append(div);
    });
  }, false);
}

get_affirmation();