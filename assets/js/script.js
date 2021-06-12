var watchBody = document.querySelector("#watch-table");
var readBody = document.querySelector("#read-table");

var PUBLIC_KEY = "a6839955954077504b1dd8c4c57724b0";
var PRIV_KEY = "798c0e386c7012b9fbe680a511afe7292fc5887e";
var ts = new Date().getTime();
var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

var capButton = $("#cap-button");
var ironButton = $("#iron-button");
var pantherButton = $("#panther-button");
var thorButton = $("#thor-button");
var widowButton = $("#widow-button");
var spiderButton = $("#spider-button");
var wolButton = $("#wol-button");
var venButton = $("#ven-button");
var lokiButton = $("#loki-button");
var mystButton = $("#myst-button");

// var character = "";

function searchMovie(character) {
  var requestUrl =
    "https://www.omdbapi.com/?s=" + character + "&apikey=94e073f4&type=movie";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table
      for (var i = 0; i < data.Search.length; i++) {
        var movieName = data.Search[i].Title;
    
        var movieEl = document.createElement('a');
    
        var cinemaEl = document.createElement('p');
        cinemaEl.textContent = movieName;
    
        
        movieEl.appendChild(cinemaEl);
        watchBody.appendChild(movieEl);
      }
});   
}

function searchMarvel(characterId) {
  var marvelUrl =
    "https://gateway.marvel.com:443/v1/public/characters/" +
    characterId +
    "/comics?format=comic&formatType=comic&dateRange=2010-01-01%2C2020-01-01&limit=5&ts=" +
    ts +
    "&apikey=" +
    PUBLIC_KEY +
    "&hash=" +
    hash;

  console.log(marvelUrl);

  fetch(marvelUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table
      for (var i = 0; i < data.data.results.length; i++) {
        var comicName = data.data.results[i].title;
    
        var comicEl = document.createElement('a');
    
        var titleEl = document.createElement('p');
        titleEl.textContent = comicName;
    
        
        comicEl.appendChild(titleEl);
        readBody.appendChild(comicEl);
      }
}); 
}
capButton.on("click", function () {
  searchMarvel("1009220");
  searchMovie("Captain_America");
});

wolButton.on("click", function () {
  searchMarvel("1009718");
  searchMovie("Wolverine");
});

ironButton.on("click", function () {
  searchMarvel("1009368");
  searchMovie("Iron_Man");
});

pantherButton.on("click", function () {
  searchMarvel("1009187");
  searchMovie("Black_Panther");
});
thorButton.on("click", function () {
  searchMarvel("1009664");
  searchMovie("Thor");
});
widowButton.on("click", function () {
  searchMarvel("1009189");
  searchMovie("Black_Widow");
});
spiderButton.on("click", function () {
  searchMarvel("1009610");
  searchMovie("Spiderman");
});
venButton.on("click", function () {
  searchMarvel("1011128");
  searchMovie("Venom");
});
lokiButton.on("click", function () {
  searchMarvel("1009407");
  searchMovie("Loki");
});
mystButton.on("click", function () {
  searchMarvel("1009465");
  searchMovie("Mystique");
});

// capButton. character = "1009220";
// wolButton.character, "1009718"));
// ironButton.character, "1009368"));
// pantherButton.character, "1009187"));
// thorButton.character, "1009664"));
// widowButton.character, "1009189"));
// spiderButton.character, "1009610"));
// venButton.character, "1011128"));
// lokiButton.character, "1009407"));
// mystButton.character, "1009465"));

