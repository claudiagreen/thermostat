function Thermostat(){
  this.temperature = 20;
  this.maxTemp = 25;
}

Thermostat.prototype.increaseTemp = function(){
  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature > 10){
    this.temperature --;
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
