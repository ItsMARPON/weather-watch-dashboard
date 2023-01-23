var mainList = document.querySelector("ul");

function getApi() {
  var requestUrl =
    "api.openweathermap.org/data/2.5/forecast?lat=44&lon=10&appid=4f37af9ace93cd2c4a4e0290356285bd";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listitem = document.createElement("li");
        listitem.textContent = data[i].html_url;
        mainList.appendChild(listitem);
      }
    });
}
