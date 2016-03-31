<<<<<<< HEAD
function Thermostat(){
  this.temperature = 20;
  this.maxTemp = 25;
  this.powerSaving = true;
}

Thermostat.prototype.increaseTemp = function(){
  if(this.temperature < this.maxTemp){
    this.temperature ++;
    this.displayTempColor();
  }
  else{
    throw new Error("Cannot exceed maximum temperature");
  }
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature > 10){
    this.temperature --;
    this.displayTempColor();
  }
  else {
    throw new Error("Temperature can't be below 10");
  }
};

Thermostat.prototype.powerSavingSwitch = function(){
  if(this.maxTemp === 25){
    this.maxTemp = 32;
    this.powerSaving = false;
  }
  else {
    this.maxTemp = 25;
    this.powerSaving = true;
  }
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
};

Thermostat.prototype.displayTempColor = function(){
  if(this.temperature < 18){
    return 'green';
  }
  else if (this.temperature >= 18 && this.temperature < 25) {
    return 'yellow';
  }
  else {
    return 'red';
=======
function Thermostat(defaultTemp = 20) {
  this._defaultTemperature = defaultTemp;
  this.temperature         = this._defaultTemperature;
  this.isSavingPower       = true;
  this._minTemperature     = 10;
  this._savingPowerMax     = 25;
  this._noSavingPowerMax   = 32;
  this.energyUsage         = 'medium';
}

Thermostat.prototype.increase = function () {
  if(this.temperature === this.maxTemp()){
    throw new Error('BOOP');
  }
    this.temperature++;
    this._defineColour();
};

Thermostat.prototype.decrease = function () {
  if(this.temperature === this._minTemperature){
    throw new Error('BEEP');
  }
    this.temperature--;
    this._defineColour();
  };

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this._defaultTemperature;
  this._defineColour();
};

Thermostat.prototype.powerSavingMode = function () {
  this.isSavingPower = !this.isSavingPower;
  if(this.isSavingPower && this.temperature > 25){
    this.temperature = this._savingPowerMax;
    this._defineColour();
  }
};

Thermostat.prototype.maxTemp = function () {
  if(this.isSavingPower){
    return this._savingPowerMax;
  }  else {
    return this._noSavingPowerMax;
  }
};

Thermostat.prototype._defineColour = function () {
  if(this.temperature > 25){
    this.energyUsage = 'high';
  } else if (this.temperature > 18) {
    this.energyUsage = 'medium';
  } else {
    this.energyUsage = 'low';
>>>>>>> e6816b74ff335203a5aa3d8a79ada5748ee903b5
  }
};
