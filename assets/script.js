var header = $('header');

function buildWeatherResults(data) {

    console.log(data)
    var header = $('<h1>');
    header.text(data.city.name);
    header.addClass('fancy');
    var temp = $('<div>');
    //var farenheit replaces line 12 (data.main.temp)

for(i = 0; i < data.list.length; i++) {
    var forecast = data.list[i];
    var farenheit = Math.round(((forecast.main.temp-273.15)*1.8)+32);
if (i % 8 == 3 ){ 
    
    console.log(forecast.dt_txt, farenheit, forecast.weather[0].description)
}
//main.temp + main.weather[0].descrition;

    // temp.text(data.main.temp);
    // $('.weatherCard').append(header);
    // $('.weatherCard').append(temp);
}
}
//Look for a kalvin converter

$('#search-form').on('submit', function(e){
    e.preventDefault();
    var city = $('#searchBar').val();

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4b1759deb04d5cdd0c2eca9b01f23e0b"
    // const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4b1759deb04d5cdd0c2eca9b01f23e0b"
    //create empty array
    var citiesArr = []
    
    fetch(forecastURL)
      .then(function(response){
        return response.json()
      })
      .then(function(data) {
        buildWeatherResults(data)
       })
      .catch(function(error){
         console.log('Error while fetching:', error);
      })

})
