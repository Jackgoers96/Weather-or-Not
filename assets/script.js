var header = $("header");
var searchResults = $("#searchResults");
var cityButton;

function buildWeatherResults(data) {
  console.log(data);
  //next line empties the code for new search
  $(".weatherCard").empty();
  // var farenheit = "";
  for (i = 0; i < data.list.length; i++) {
    var forecast = data.list[i];
  }
  var container = $("<div>");
  container.addClass("container");
  $(".weatherCard").append(container);
  var row = $("<div>");
  row.addClass("row");
  container.append(row);
  var largeHeading = $("<div>");
  largeHeading.addClass("row");
  largeHeading.addClass("super");
  largeHeading.text(data.city.name);
  row.append(largeHeading);
  var colMed = $("<div>");
  colMed.addClass("row");
  row.append(colMed);




    setUp();
    // if (i % 8 == 3) {
    //   console.log(forecast.dt_txt, farenheit, forecast.weather[0].description);
      
      
    
    function setUp() {
    var chosenDay = [
      
      {
        spec: data.list[0],
        name: "Currently",

        
      },
      {
        spec: data.list[8],
        name: "Tomorrow",

      },
      {
        spec: data.list[16],
        name: "3-day",

      },
      {
        spec: data.list[24],
        name: "4-day",

      },
      {
        spec: data.list[32],
        name: "5-day",

      }
    ];
    console.log(chosenDay);
  

    var chosenDay1 = chosenDay[0];
    var chosenDay2 = chosenDay[1];
    var chosenDay3 = chosenDay[2];
    var chosenDay4 = chosenDay[3];
    var chosenDay5 = chosenDay[4];

    var header1 = $("<h1>")
      header1.text(chosenDay1.name);
      header1.addClass("fancy");
      header1.attr("id", "card1");
      var temp1 = $("<div>");
      $(colMed).append(header1);
      temp1.text(Math.round((chosenDay1.spec.main.temp - 273.15) * 1.8 + 32)+"°");
      temp1.addClass("fancySmol");
      $("#card1").append(temp1);  
      
      if (chosenDay1.spec.weather[0].description == "broken clouds") {
        var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
        brokenClouds.attr("width", "124");
        brokenClouds.attr("height", "124");
        brokenClouds.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "clear sky") {
        var clearSky = $("<img src='./assets/images/clearSky.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "scattered clouds") {
        var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
        scatteredClouds.attr("width", "124");
        scatteredClouds.attr("height", "124");
        scatteredClouds.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "light rain") {
        var lightRain = $("<img src='./assets/images/lightRain.png'>");
        lightRain.attr("width", "124");
        lightRain.attr("height", "124");
        lightRain.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "overcast clouds") {
        var overcast = $("<img src='./assets/images/overcast.png'>");
        overcast.attr("width", "124");
        overcast.attr("height", "124");
        overcast.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "severe storms") {
        var severeStorms = $("<img src='./assets/images/severStorm.png'>");
        severeStorms.attr("width", "124");
        severeStorms.attr("height", "124");
        severeStorms.appendTo("#card1");
      } else if (chosenDay1.spec.weather[0].description == "storms") {
        var storms = $("<img src='./assets/images/overcast.png'>");
        storms.attr("width", "124");
        storms.attr("height", "124");
        storms.appendTo("#card1");
      }else if (chosenDay1.spec.weather[0].description == "snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card1");
      }else if (chosenDay1.spec.weather[0].description == "light snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card1");
      }else if (chosenDay1.spec.weather[0].description == "few clouds") {
        var clearSky = $("<img src='./assets/images/brokenClouds.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card1");
      }
      else if (chosenDay1.spec.weather[0].description == "moderate rain") {
        var clearSky = $("<img src='./assets/images/moderateRain.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card1");
      }
    

    var header2 = $("<h1>")
      header2.text(chosenDay2.name);
      header2.addClass("fancy");
      header2.attr("id", "card2");
      var temp2 = $("<div>");
      $(colMed).append(header2);
      temp2.text(Math.round((chosenDay2.spec.main.temp - 273.15) * 1.8 + 32)+"°");
      temp2.addClass("fancySmol");
      $("#card2").append(temp2);

      if (chosenDay2.spec.weather[0].description == "broken clouds") {
        var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
        brokenClouds.attr("width", "124");
        brokenClouds.attr("height", "124");
        brokenClouds.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "clear sky") {
        var clearSky = $("<img src='./assets/images/clearSky.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "scattered clouds") {
        var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
        scatteredClouds.attr("width", "124");
        scatteredClouds.attr("height", "124");
        scatteredClouds.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "light rain") {
        var lightRain = $("<img src='./assets/images/lightRain.png'>");
        lightRain.attr("width", "124");
        lightRain.attr("height", "124");
        lightRain.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "overcast clouds") {
        var overcast = $("<img src='./assets/images/overcast.png'>");
        overcast.attr("width", "124");
        overcast.attr("height", "124");
        overcast.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "severe storms") {
        var severeStorms = $("<img src='./assets/images/severStorm.png'>");
        severeStorms.attr("width", "124");
        severeStorms.attr("height", "124");
        severeStorms.appendTo("#card2");
      } else if (chosenDay2.spec.weather[0].description == "storms") {
        var storms = $("<img src='./assets/images/overcast.png'>");
        storms.attr("width", "124");
        storms.attr("height", "124");
        storms.appendTo("#card2");
      }else if (chosenDay2.spec.weather[0].description == "snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card2");
      }else if (chosenDay2.spec.weather[0].description == "light snow") {
          var snow = $("<img src='./assets/images/snow.png'>");
          snow.attr("width", "124");
          snow.attr("height", "124");
          snow.appendTo("#card2");
      }else if (chosenDay2.spec.weather[0].description == "few clouds") {
        var clearSky = $("<img src='./assets/images/brokenClouds.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card2");
      }
      else if (chosenDay2.spec.weather[0].description == "moderate rain") {
        var clearSky = $("<img src='./assets/images/moderateRain.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card2");
      }


    var header3 = $("<h1>")
      header3.text(chosenDay3.spec.dt_txt.substring(5,10));
      header3.addClass("fancy");
      header3.attr("id", "card3");
      var temp3 = $("<div>");
      $(colMed).append(header3);
      temp3.text(Math.round((chosenDay3.spec.main.temp - 273.15) * 1.8 + 32)+"°");
      temp3.addClass("fancySmol");
      $("#card3").append(temp3);

      if (chosenDay3.spec.weather[0].description == "broken clouds") {
        var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
        brokenClouds.attr("width", "124");
        brokenClouds.attr("height", "124");
        brokenClouds.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "clear sky") {
        var clearSky = $("<img src='./assets/images/clearSky.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "scattered clouds") {
        var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
        scatteredClouds.attr("width", "124");
        scatteredClouds.attr("height", "124");
        scatteredClouds.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "light rain") {
        var lightRain = $("<img src='./assets/images/lightRain.png'>");
        lightRain.attr("width", "124");
        lightRain.attr("height", "124");
        lightRain.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "overcast clouds") {
        var overcast = $("<img src='./assets/images/overcast.png'>");
        overcast.attr("width", "124");
        overcast.attr("height", "124");
        overcast.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "severe storms") {
        var severeStorms = $("<img src='./assets/images/severStorm.png'>");
        severeStorms.attr("width", "124");
        severeStorms.attr("height", "124");
        severeStorms.appendTo("#card3");
      } else if (chosenDay3.spec.weather[0].description == "storms") {
        var storms = $("<img src='./assets/images/overcast.png'>");
        storms.attr("width", "124");
        storms.attr("height", "124");
        storms.appendTo("#card3");
      }else if (chosenDay3.spec.weather[0].description == "snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card3");
      }else if (chosenDay3.spec.weather[0].description == "light snow") {
          var snow = $("<img src='./assets/images/snow.png'>");
          snow.attr("width", "124");
          snow.attr("height", "124");
          snow.appendTo("#card3");
        }else if (chosenDay3.spec.weather[0].description == "few clouds") {
        var clearSky = $("<img src='./assets/images/brokenClouds.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card3");
      }
      else if (chosenDay3.spec.weather[0].description == "moderate rain") {
        var clearSky = $("<img src='./assets/images/moderateRain.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card3");
      }

    var header4 = $("<h1>")
      header4.text(chosenDay4.spec.dt_txt.substring(5,10));
      header4.addClass("fancy");
      header4.attr("id", "card4");
      var temp4 = $("<div>");
      $(colMed).append(header4);
      temp4.text(Math.round((chosenDay4.spec.main.temp - 273.15) * 1.8 + 32)+"°");
      temp4.addClass("fancySmol");
      $("#card4").append(temp4);

      if (chosenDay4.spec.weather[0].description == "broken clouds") {
        var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
        brokenClouds.attr("width", "124");
        brokenClouds.attr("height", "124");
        brokenClouds.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "clear sky") {
        var clearSky = $("<img src='./assets/images/clearSky.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "scattered clouds") {
        var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
        scatteredClouds.attr("width", "124");
        scatteredClouds.attr("height", "124");
        scatteredClouds.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "light rain") {
        var lightRain = $("<img src='./assets/images/lightRain.png'>");
        lightRain.attr("width", "124");
        lightRain.attr("height", "124");
        lightRain.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "overcast clouds") {
        var overcast = $("<img src='./assets/images/overcast.png'>");
        overcast.attr("width", "124");
        overcast.attr("height", "124");
        overcast.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "severe storms") {
        var severeStorms = $("<img src='./assets/images/severStorm.png'>");
        severeStorms.attr("width", "124");
        severeStorms.attr("height", "124");
        severeStorms.appendTo("#card4");
      } else if (chosenDay4.spec.weather[0].description == "storms") {
        var storms = $("<img src='./assets/images/overcast.png'>");
        storms.attr("width", "124");
        storms.attr("height", "124");
        storms.appendTo("#card4");
      }else if (chosenDay4.spec.weather[0].description == "snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card4");
      }else if (chosenDay4.spec.weather[0].description == "light snow") {
          var snow = $("<img src='./assets/images/snow.png'>");
          snow.attr("width", "124");
          snow.attr("height", "124");
          snow.appendTo("#card4");
      }else if (chosenDay4.spec.weather[0].description == "few clouds") {
        var clearSky = $("<img src='./assets/images/brokenClouds.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card4");
      }
      else if (chosenDay4.spec.weather[0].description == "moderate rain") {
        var clearSky = $("<img src='./assets/images/moderateRain.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card4");
      }

    var header5 = $("<h1>")
      header5.text(chosenDay5.spec.dt_txt.substring(5,10));
      header5.addClass("fancy");
      header5.attr("id", "card5");
      var temp5 = $("<div>");
      $(colMed).append(header5);
      temp5.text(Math.round((chosenDay5.spec.main.temp - 273.15) * 1.8 + 32)+"°");
      temp5.addClass("fancySmol");
      $("#card5").append(temp5);

      if (chosenDay5.spec.weather[0].description == "broken clouds") {
        var brokenClouds = $("<img src='./assets/images/brokenClouds.png'>");
        brokenClouds.attr("width", "124");
        brokenClouds.attr("height", "124");
        brokenClouds.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "clear sky") {
        var clearSky = $("<img src='./assets/images/clearSky.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "scattered clouds") {
        var scatteredClouds = $("<img src='./assets/images/scattered.png'>");
        scatteredClouds.attr("width", "124");
        scatteredClouds.attr("height", "124");
        scatteredClouds.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "light rain") {
        var lightRain = $("<img src='./assets/images/lightRain.png'>");
        lightRain.attr("width", "124");
        lightRain.attr("height", "124");
        lightRain.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "overcast clouds") {
        var overcast = $("<img src='./assets/images/overcast.png'>");
        overcast.attr("width", "124");
        overcast.attr("height", "124");
        overcast.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "severe storms") {
        var severeStorms = $("<img src='./assets/images/severStorm.png'>");
        severeStorms.attr("width", "124");
        severeStorms.attr("height", "124");
        severeStorms.appendTo("#card5");
      } else if (chosenDay5.spec.weather[0].description == "storms") {
        var storms = $("<img src='./assets/images/overcast.png'>");
        storms.attr("width", "124");
        storms.attr("height", "124");
        storms.appendTo("#card5");
      }else if (chosenDay5.spec.weather[0].description == "snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card5");
      }else if (chosenDay5.spec.weather[0].description == "light snow") {
        var snow = $("<img src='./assets/images/snow.png'>");
        snow.attr("width", "124");
        snow.attr("height", "124");
        snow.appendTo("#card5");
      }else if (chosenDay5.spec.weather[0].description == "few clouds") {
        var clearSky = $("<img src='./assets/images/brokenClouds.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card5");
      }
      else if (chosenDay5.spec.weather[0].description == "moderate rain") {
        var clearSky = $("<img src='./assets/images/moderateRain.png'>");
        clearSky.attr("width", "124");
        clearSky.attr("height", "124");
        clearSky.appendTo("#card5");
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
