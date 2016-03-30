function Thermostat(){
  this.temperature = 20;
  this.maxTemp = 25;
  this.tempColor = 'yellow'
}

Thermostat.prototype.increaseTemp = function(){
  this.temperature ++;
  this.displayTempColor();
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

Thermostat.prototype.powerSaving = function(){
  if(this.maxTemp === 25){
    this.maxTemp = 32;
  }
  else {
    this.maxTemp = 25;
  }
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
};

Thermostat.prototype.displayTempColor = function(){
  if(this.temperature < 18){
    this.tempColor = 'green';
  }
  else if (this.temperature >= 18 && this.temperature < 25) {
    this.tempColor = 'yellow';
  }
  else {
    this.tempColor = 'red';
  }
}
