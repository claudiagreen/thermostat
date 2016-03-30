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
    });
  });
});
