function Bike() {
  this.isWorking = true
}

Bike.prototype.reportBroken = function () {
  this.isWorking = false  
};
