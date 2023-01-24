var APIKey = "4f37af9ace93cd2c4a4e0290356285bd";
var city = "";
var state = "";
var longitude = "";
var latitude = "";
var mainList = document.querySelector("ul");
var cityNameButton = document.querySelector("#submit-btn");
var cityFormEl = document.querySelector("#city");

// Take user input for City Name (Location) and save to local storage and print to console.
$(document).ready(function () {
  var today = dayjs();
  $("#currentDay").text(today.format("MMMM D, YYYY HH:mm A"));

  function getCityInput () {
    var cityName = $('#city').val();
    
  }
  });