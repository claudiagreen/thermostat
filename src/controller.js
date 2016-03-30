$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase_temp').click(function(){
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temperature);
  });
});
