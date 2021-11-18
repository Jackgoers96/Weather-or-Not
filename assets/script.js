var header = $("header");
var searchResults = $("#searchResults");
var cityButton;

function buildWeatherResults(data) {
  console.log(data);
  //next line empties the code for new search
  $(".weatherCard").empty();
  var farenheit = "";
  for (i = 0; i < data.list.length; i++) {
    var forecast = data.list[i];
    var forecast = data.list[i];
    var farenheit = Math.round((forecast.main.temp - 273.15) * 1.8 + 32);

    if (i % 8 == 3) {
      console.log(forecast.dt_txt, farenheit, forecast.weather[0].description);
      createCard(forecast.dt_txt, farenheit, forecast.weather[0].description);
    }
      
    
  }
    //var farenheit replaces line 12 (data.main.temp), uses Farenheit instead of Kelvin
    
    
    //
    console.log("list item" + i + "is" + farenheit);
    //Sets the interval to once a day, by going every 24 hours, based on the 3 hour interval given by API
   

      function createCard() {
      var header = $("<h1>");
      header.text(data.city.name);
      header.addClass("fancy");
      var temp = $("<div>");
      $(".weatherCard").append(header);
      temp.text(farenheit);
      temp.addClass("fancySmol");
      $(".fancy").append(temp);
      iconSelector;
     }
  
  //loop ends
  function iconSelector() {
  if (forecast.weather[0].description == "broken clouds") {
    var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
    brokenClouds.attr("width", "124");
    brokenClouds.attr("height", "124");
    brokenClouds.appendTo(".fancy");
  } else if (forecast.weather[0].description == "clear sky") {
    var clearSky = $("<img src='./assets/images/clearSky.png'>");
    clearSky.attr("width", "124");
    clearSky.attr("height", "124");
    clearSky.appendTo(".fancy");
  } else if (forecast.weather[0].description == "scattered clouds") {
    var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
    scatteredClouds.attr("width", "124");
    scatteredClouds.attr("height", "124");
    scatteredClouds.appendTo(".fancy");
  } else if (forecast.weather[0].description == "light rain") {
    var lightRain = $("<img src='./assets/images/lightRain.png'>");
    lightRain.attr("width", "124");
    lightRain.attr("height", "124");
    lightRain.appendTo(".fancy");
  } else if (forecast.weather[0].description == "overcast") {
    var overcast = $("<img src='./assets/images/overcast.png'>");
    overcast.attr("width", "124");
    overcast.attr("height", "124");
    overcast.appendTo(".fancy");
  } else if (forecast.weather[0].description == "severe storms") {
    var severeStorms = $("<img src='./assets/images/severStorm.png'>");
    severeStorms.attr("width", "124");
    severeStorms.attr("height", "124");
    severeStorms.appendTo(".fancy");
  } else if (forecast.weather[0].description == "storms") {
    var storms = $("<img src='./assets/images/overcast.png'>");
    storms.attr("width", "124");
    storms.attr("height", "124");
    storms.appendTo(".fancy");
  }
  else if (forecast.weather[0].description == "snow") {
    var snow = $("<img src='./assets/images/snow.png'>");
    snow.attr("width", "124");
    snow.attr("height", "124");
    snow.appendTo(".fancy");
}
  }
}
$("#search-form").on("submit", function (e) {
  e.preventDefault();
  var city = $("#searchBar").val();
  var cityListEl = $("<li>").text(city);

  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=4b1759deb04d5cdd0c2eca9b01f23e0b";
  // const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4b1759deb04d5cdd0c2eca9b01f23e0b"
  //create empty array
  cityListEl.appendTo(".list");

  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      buildWeatherResults(data);
    })
    .catch(function (error) {
      console.log("Error while fetching:", error);
    });
  localStorage.getItem(buildWeatherResults);
  localStorage.setItem(cityListEl, buildWeatherResults);

  // cityButton.text = $("#searchBar").val();
  $("searchResults").append.cityButton;
})
