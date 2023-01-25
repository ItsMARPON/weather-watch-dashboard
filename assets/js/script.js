//Website Reference: https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// Take user input for City Name (Location) and save to local storage and print to console.
$(document).ready(function () {
  let mainList = document.querySelector("ul");
  let cityEl = document.querySelector("#city");

  // Get date and time
  let today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY HH:mm A"));

  // Get user Input for City and set to Local storage
  function getCityInput() {
    $("#submit-btn").on("click", function (event) {
      event.preventDefault();
      let cityName = $("#city").val();
      localStorage.setItem("city", JSON.stringify(cityName));
      let city = localStorage.getItem("city") || [];
      city = JSON.parse(city);
      getCityOrGeo();
    });
  }
  getCityInput();

  // Call API to get weather information

  function getCityOrGeo() {
    let apiUrl = " https://api.openweathermap.org/geo/1.0/direct?q=";
    let limit = "&limit=5";
    let APIKey = "&appid=4f37af9ace93cd2c4a4e0290356285bd";
    // let city = "Minneapolis";
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
        }
      });
  }

  //   function getWeatherData() {
  //     let apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?";
  //     let lat = "lat=44.34";
  //     let lon = "&lon=10.99";
  //     let APIKey = "&appid=4f37af9ace93cd2c4a4e0290356285bd";
  //     //   let longitude = "lat=" + listLonItem;
  //     //   let latitude = "&lon=" + listLatItem;

  //     let requestDataUrl = apiUrl2 + lat + lon + APIKey;

  //     fetch(requestDataUrl)
  //       .then(function (response) {
  //         if (response.ok) {
  //           console.log(response);
  //           return response.json();
  //         } else {
  //           alert("Error2:" + response.statusText);
  //         }
  //       })
  //       .then(function (data) {
  //         for (var i = 0; i < data.length; i++) {
  //           var listMainItem = document.createElement("li");
  //           listMainItem.textContent = data[i].main;
  //           mainList.appendChild(listMainItem);
  //           var listWeatherItem = document.createElement("li");
  //           listWeatherItem.textContent = data[i].weather;
  //           mainList.appendChild(listWeatherItem);
  //           var listCloudItem = document.createElement("li");
  //           listCloudItem.textContent = data[i].cloud;
  //           mainList.appendChild(listCloudItem);
  //           var listWindItem = document.createElement("li");
  //           listWindItem.textContent = data[i].wind;
  //           mainList.appendChild(listWindItem);
  //           console.log("It finally worked");
  //         }
  //       });
  //   }
  //   getWeatherData();
});
