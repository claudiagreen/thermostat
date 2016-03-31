$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#increase_temp').click(function(){
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#decrease_temp').click(function(){
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#reset_tempt').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#power_saving').click(function(){
    thermostat.powerSavingSwitch();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.displayTempColor());
  }

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=19569d86978d1b271daecc3cb220ecd9';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

});
