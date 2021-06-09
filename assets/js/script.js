// OMDB connect
var character = "spider-man";

fetch("https://www.omdbapi.com/?s=" + character + "&apikey=94e073f4&type=movie")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// ------------------------------------------------------

// marvel developer portal
var PRIV_KEY = "798c0e386c7012b9fbe680a511afe7292fc5887e";
var PUBLIC_KEY = "a6839955954077504b1dd8c4c57724b0";

function getMarvelResponse() {
  // you need a new ts every request
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = "1009187"; // wolverine (search is by character ID #, we might need to preprogram options)

  var url = "http://gateway.marvel.com:80/v1/public/comics";

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId,
  })
    .done(function (data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function (err) {
      // the error codes are listed on the dev site
      console.log(err);
    });
}

getMarvelResponse();
