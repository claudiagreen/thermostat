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

  it("can decrease temperature", function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("minimum temperature is 10 degrees", function(){
    var error = "Temperature can't be below 10"
    for(i=20; i>=11; i--){thermostat.decreaseTemp()};
    expect( function(){ thermostat.decreaseTemp(); } ).toThrow(new Error(error));
  });

  describe("power saving mode", function(){
    it("maximum temperature is 25 when on", function(){
      expect(thermostat.maxTemp).toEqual(25);
    });

    it("maximum temperature is 32 when off", function(){
      thermostat.powerSaving();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });

    it("can reset the temperature", function(){
      thermostat.temperature = 25;
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });
});
