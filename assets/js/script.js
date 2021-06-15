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

var imgEl = document.querySelectorAll(".pic");
console.log(imgEl);

function searchMovie(character) {
  var requestUrl =
    "https://www.omdbapi.com/?s=" +
    character +
    "&apikey=94e073f4&totalresults=5&type=movie";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table
      watchBody.textContent = "";
      for (var i = 0; i < data.Search.length; i++) {
        var movieName = data.Search[i].Title;

        var movieEl = document.createElement("p");

        var cinemaEl = document.createElement("p");
        cinemaEl.textContent = movieName;
        cinemaEl.classList.add("movieList");
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
      readBody.textContent = "";
      imgEl[0].setAttribute(
        "src",
        data.data.results[0].thumbnail.path +
          "." +
          data.data.results[0].thumbnail.extension
      );

      console.log(
        data.data.results[0].thumbnail.path +
          "." +
          data.data.results[0].thumbnail.extension
      );
      for (var i = 0; i < data.data.results.length; i++) {
        var comicName = data.data.results[i].title;

        var comicEl = document.createElement("p");

        var titleEl = document.createElement("p");
        titleEl.textContent = comicName;
        titleEl.classList.add("movieList");
        comicEl.appendChild(titleEl);
        readBody.appendChild(comicEl);
      }
    });
}
capButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/captain-america2.jpg");
  searchMarvel("1009220");
  searchMovie("Captain_America");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009220", name: "Captain_America" })
  );
});

wolButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/wolverine2.jpg");
  searchMarvel("1009718");
  searchMovie("Wolverine");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009718", name: "Wolverine" })
  );
});

ironButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/iron-man2.jpg");
  searchMarvel("1009368");
  searchMovie("Iron_Man");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009368", name: "Iron_Man" })
  );
});

pantherButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/black-panther2.jpg");
  searchMarvel("1009187");
  searchMovie("Black_Panther");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009187", name: "Black_Panther" })
  );
});
thorButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/thor2.jpg");
  searchMarvel("1009664");
  searchMovie("Thor");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009664", name: "Thor" })
  );
});
widowButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/black-widow.jpg");
  searchMarvel("1009189");
  searchMovie("Avengers");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009189", name: "Black_Widow" })
  );
});
spiderButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/spiderman.jpg");
  searchMarvel("1009610");
  searchMovie("Spiderman");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009610", name: "Spiderman" })
  );
});
venButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/venom2.jpg");
  searchMarvel("1010788");
  searchMovie("Venom");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1011128", name: "Venom" })
  );
});
lokiButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/loki.jpg");
  searchMarvel("1009407");
  searchMovie("Loki");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009407", name: "Loki" })
  );
});
mystButton.on("click", function () {
  imgEl[0].setAttribute("src", "./assets/images/characters/mystique2.jpg");
  searchMarvel("1009465");
  searchMovie("X_Men");
  localStorage.setItem(
    "title",
    JSON.stringify({ id: "1009465", name: "Mystique" })
  );
});

var save = JSON.parse(localStorage.getItem("title"));

if (save) {
  searchMarvel(save.id);
  searchMovie(save.name);
}

// capButton. character = "1009220";
// wolButton.character, "1009718"));
// ironButton.character, "1009368"));
// pantherButton.character, "1009187"));
// thorButton.character, "1009664"));
// widowButton.character, "1009189"));
// spiderButton.character, "1009610"));
// venButton.character, "1010788"));
// lokiButton.character, "1009407"));
// mystButton.character, "1009465"));
