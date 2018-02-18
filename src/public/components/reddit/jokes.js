document.addEventListener('DOMContentLoaded', function () {

  var newsAPI = "https://www.reddit.com/r/jokes/top.json";
  let max = 100;
  $.getJSON(newsAPI, function (json) {

    var children = json.data.children;
    console.log(children);
    $.each(children, function (key, value) {
      var score = children[key]['data']['score'];
      var id = children[key]['data']['id'];

      if (score > max) {
        var title = children[key]['data']['title'];
        var text = children[key]['data']['selftext'];

        // Start of about reddit
        var isAboutReddit = text.indexOf('Reddit') > -1;
        if (isAboutReddit) {
          show = false;
        } else
          show = true;
        // End of about reddit

        var textArray = text.split('Edit:');
        text = textArray[0];

        var title_length = title.length;

        var joke = "";
        if (title.substring(0, title_length) == text.substring(0, title_length))
          joke = text;
        else 
          joke = title + "... "+ text;
          
        let save = "<span class='pull-right'><a href=\"javascript:save_joke('" + id + "')\" ><i class='fa fa-cloud' aria-hidden=\"true\"></i></a></span>"; 
        var article = "<article id='"+ id +"'>" + joke + ""+ save +"</article>";

        if (show)
          $('#news').append(article);
      }
    });
  });
}, false);