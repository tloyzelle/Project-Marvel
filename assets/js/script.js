var watchBody = document.querySelector("watch-table");
var readBody = document.querySelector("read-table");

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
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the tabledata and appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        watchBody.appendChild(createTableRow);
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
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appendingthe tabledata and appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        readBody.appendChild(createTableRow);
      }
    });
}

capButton.on("click", function () {
  searchMarvel("1009220");
  searchMovie("Captain America");
});

wolButton.on("click", function () {
  searchMarvel("1009718");
  searchMovie("Wolverine");
});

ironButton.on("click", function () {
  searchMarvel("1009368");
  searchMovie("Iron Man");
});

pantherButton.on("click", function () {
  searchMarvel("1009187");
  searchMovie("Black Panther");
});
thorButton.on("click", function () {
  searchMarvel("1009664");
  searchMovie("Thor");
});
widowButton.on("click", function () {
  searchMarvel("1009189");
  searchMovie("Black Widow");
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
