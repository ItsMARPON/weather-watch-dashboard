//Website Reference: https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// Take user input for City Name (Location) and save to local storage and print to console.
$(document).ready(function () {
  let mainList = document.querySelector("ul");
  let city = localStorage.getItem("city") || [];

  // Get date and time
  let today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY HH:mm A"));

  // Get user Input for City and set to Local storage
  function getCityInput() {
    $("#submit-btn").on("click", function (event) {
      event.preventDefault();
      let cityName = $("#city").val();
      localStorage.setItem("city", JSON.stringify(cityName));
      getCityOrGeo();
    });
  }
  getCityInput();

  // Call API to get city Latitude and Longitude coordinates

  function getCityOrGeo() {
    let apiUrl = " https://api.openweathermap.org/geo/1.0/direct?q=";
    let limit = "&limit=1";
    let APIKey = "&appid=4f37af9ace93cd2c4a4e0290356285bd";
    let requestCityUrl = apiUrl + city + limit + APIKey;

    fetch(requestCityUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          alert("Error:" + response.statusText);
        }
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
          console.log("It worked");
          getWeatherData(data[i].lat, data[i].lon);
        }
      });
  }
  //  Call API to get weather data after receiving Latitude and Longitude coordinates
  function getWeatherData(listLatItem, listLonItem) {
    let apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?";
    let APIKey = "&appid=4f37af9ace93cd2c4a4e0290356285bd";
    let latitude = "lat=" + listLatItem;
    let longitude = "&lon=" + listLonItem;
    let units = "&units=imperial";

    let requestDataUrl = apiUrl2 + latitude + longitude + APIKey + units;

    let data = [];

    fetch(requestDataUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          alert("Error2:" + response.statusText);
        }
      })
      // The API displays the weather in 3 hour increments for next 5 days
      .then(function (data) {
        // Day 1
        document.getElementById("weather-data").textContent =
          data.list[0].dt_txt;
        document.getElementById("description-data").textContent =
          data.list[0].weather[0].description;
        document.getElementById("temp-data").textContent =
          data.list[0].main.temp;
        document.getElementById("wind-data").textContent =
          data.list[0].wind.speed;
        // Day 2
        document.getElementById("weather-data2").textContent =
          data.list[7].dt_txt;
        document.getElementById("description-data2").textContent =
          data.list[7].weather[0].description;
        document.getElementById("temp-data2").textContent =
          data.list[7].main.temp;
        document.getElementById("wind-data2").textContent =
          data.list[7].wind.speed;
        // Day 3
        document.getElementById("weather-data3").textContent =
          data.list[15].dt_txt;
        document.getElementById("description-data3").textContent =
          data.list[15].weather[0].description;
        document.getElementById("temp-data3").textContent =
          data.list[15].main.temp;
        document.getElementById("wind-data3").textContent =
          data.list[15].wind.speed;
        // Day 4
        document.getElementById("weather-data4").textContent =
          data.list[26].dt_txt;
        document.getElementById("description-data4").textContent =
          data.list[26].weather[0].description;
        document.getElementById("temp-data4").textContent =
          data.list[26].main.temp;
        document.getElementById("wind-data4").textContent =
          data.list[26].wind.speed;
        // Day 5
        document.getElementById("weather-data5").textContent =
          data.list[39].dt_txt;
        document.getElementById("description-data5").textContent =
          data.list[39].weather[0].description;
        document.getElementById("temp-data5").textContent =
          data.list[39].main.temp;
        document.getElementById("wind-data5").textContent =
          data.list[39].wind.speed;

        console.log(data);
      });
  }
});
