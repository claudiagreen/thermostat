<<<<<<< HEAD
describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("can increase temperature", function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it("throws an error for beyond maxTemp", function(){
    thermostat.temperature = 25;
    var error = 'Cannot exceed maximum temperature';
    expect( function() { thermostat.increaseTemp();}).toThrow(new Error(error));
  });

  it("can decrease temperature", function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("minimum temperature is 10 degrees", function(){
    var error = "Temperature can't be below 10";
    for(i=20; i>=11; i--){thermostat.decreaseTemp();}
    expect( function(){ thermostat.decreaseTemp(); } ).toThrow(new Error(error));
  });

  describe("power saving mode", function(){
    it("maximum temperature is 25 when on", function(){
      expect(thermostat.maxTemp).toEqual(25);
    });

    it("maximum temperature is 25 when on", function(){
      expect(thermostat.powerSaving).toBeTruthy();
    });

    it("maximum temperature is 32 when off", function(){
      thermostat.powerSavingSwitch();
      expect(thermostat.maxTemp).toEqual(32);
    });

    it("maximum temperature is 32 when off", function(){
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toBeFalsy();
    });
  });

  it("can reset the temperature", function(){
    thermostat.temperature = 25;
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("display colour", function(){
    it("is green if temperature below 18", function(){
      thermostat.temperature = 17;
      expect(thermostat.displayTempColor()).toEqual('green');
    });

    it("is yellow if temperature is >=18 but < 25", function(){
      thermostat.temperature = 18;
      expect(thermostat.displayTempColor()).toEqual('yellow');
    });

    it("is red if temperature is >= 25", function(){
      thermostat.temperature = 25;
      expect(thermostat.displayTempColor()).toEqual('red');
=======
describe('Thermostat', function () {
  var thermostat, temp;

  beforeEach(function () {
    thermostat = new Thermostat();
    temp = thermostat._defaultTemperature;
  });

  it('has a default temp of 20ºC', function () {
    expect(thermostat.temperature).toEqual(temp);
  });

  describe('change temperature', function () {
    it('increases the temperature by 1ºC', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(temp + 1);
    });

    it('decreases the temperature by 1ºC', function () {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(temp - 1);
    });

    it('resets the temperature to 20ºC', function () {
      thermostat.decrease();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(temp);
    });
  });

  describe('temperature limits', function () {
    it('has a minimum temperature of 10 ºC', function () {
      for(var i = 1; i <= 10; i++) { thermostat.decrease(); }
      var toMin = function() { thermostat.decrease();};
      expect(toMin).toThrowError('BEEP');
    });

    describe('power saving mode', function () {
      it('is on by default', function () {
        expect(thermostat.isSavingPower).toBe(true);
      });

      it('toggles power saving mode', function () {
        thermostat.powerSavingMode();
        expect(thermostat.isSavingPower).toBe(false);
        thermostat.powerSavingMode();
        expect(thermostat.isSavingPower).toBe(true);
      });

      it('resets to 25ºC when switched on past limit',function () {
        thermostat.powerSavingMode();
        thermostat.temperature = thermostat._noSavingPowerMax;
        thermostat.powerSavingMode();
        expect(thermostat.temperature).toEqual(thermostat._savingPowerMax);
      });

      describe('max temperature', function () {
        it('is 25 ºC when saving power', function () {
          thermostat.temperature = 25;
          var toMax = function () { thermostat.increase(); };
          expect(toMax).toThrowError('BOOP');
        });

        it('is 32 ºC when not saving power', function () {
          thermostat.temperature   = 32;
          thermostat.isSavingPower = false;
          var toMax = function () { thermostat.increase(); };
          expect(toMax).toThrowError('BOOP');
        });
      });
    });
  });

  describe('thermostat energy usage', function () {
    it('is low when less than 18ºC', function () {
      thermostat.temperature = 15;
      thermostat.decrease();
      expect(thermostat.energyUsage).toBe('low');
    });

    it('is medium between 18ºC and 25ºC', function () {
      thermostat.temperature = 22;
      thermostat.decrease();
      expect(thermostat.energyUsage).toBe('medium');
    });

    it('is high when greater than 25ºC', function () {
      thermostat.temperature = 30;
      thermostat.decrease();
      expect(thermostat.energyUsage).toBe('high');
>>>>>>> e6816b74ff335203a5aa3d8a79ada5748ee903b5
    });
  });
});
