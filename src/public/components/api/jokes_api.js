function show_jokes(data) {
  if (data.status === 'ok') {
    let jokes = data.jokes;
    let jokeBucket = [];
    $.each(jokes, function (key) {
      let joke = jokes[key].text;
      let id = jokes[key].id;
      let remove = "<span class='pull-right'><a href=\"javascript:remove_joke('" + id + "')\" ><i class='fa fa-trash' aria-hidden=\"true\"></i></a></span>";
      let article = "<article><p>" + joke + " " + remove + "</p></article>";
      // Check if url has already been submitted under another title. No dup stories
      const isJokeInBucket = jokeBucket.includes(joke);
      if (!isJokeInBucket) {
        jokeBucket.push(joke); // Append to Array
        $('#news').append(article);
      }
    });
  }
}

function save_joke(data) {
  var url = "https://api.fivecat.xyz/api/index.php/jokes/add?id=" + data;
  try {
    var joke = $("#" + data).text();
    $.post(url, {
      text: joke
    });
    $.notify.addStyle('happyblue', {
      html: "<div>☺<span data-notify-text/>☺</div>"
      , classes: {
        base: {
          "white-space": "nowrap"
          , "background-color": "lightblue"
          , "padding": "5px"
        }
        , superblue: {
          "color": "white"
          , "background-color": "blue"
        }
      }
    });
    $.notify("Saved");
  }
  catch (error) {
    console.log(error);
  }
}

function remove_joke(data) {
  var url = "https://api.fivecat.xyz/api/index.php/jokes/remove?id=" + data;
  $.ajax({
    dataType: 'json'
    , url: url
  , });
  $.notify("Queued for removal");
}