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
  }
};
