function Thermostat(){
  this.temperature = 20;
  this.maxTemp = 25;
  this.displayColor = 'yellow'
}

Thermostat.prototype.increaseTemp = function(){
  this.temperature ++;
  this.setColor();
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature > 10){
    this.temperature --;
    this.setColor();
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

Thermostat.prototype.setColor = function(){
  if(this.temperature < 18){
    this.displayColor = 'green';
  }
  else if (this.temperature >= 18 && this.temperature < 25) {
    this.displayColor = 'yellow';
  }
  else {
    this.displayColor = 'red';
  }
}
