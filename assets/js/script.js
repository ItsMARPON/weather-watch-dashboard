var APIKey = "4f37af9ace93cd2c4a4e0290356285bd";
var city = " ";
var state = " ";
var longitude = " ";
var latitude = " ";
var mainList = document.querySelector("ul");

function getCityOrGeo() {
  var requestCityUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=" +
    APIKey;

  fetch(requestCityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listNameItem = document.createElement("li");
        listNameItem.textContent = data[i].name;
        mainList.appendChild(listNameItem);
        var listStateItem = document.createElement("li");
        listStateItem.textContent = data[i].state;
        mainList.appendChild(listStateItem);
        var listLatItem = document.createElement("li");
        listLatItem.textContent = data[i].lat;
        mainList.appendChild(listLatItem);
        var listLonItem = document.createElement("li");
        listLonItem.textContent = data[i].lon;
        mainList.appendChild(listLonItem);
      }
    });
}
getCityOrGeo();

function getWeather() {
  var dataWeatherUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(dataWeatherUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayWeather(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Weather API");
    });
}
