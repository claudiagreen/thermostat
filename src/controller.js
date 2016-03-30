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
});
