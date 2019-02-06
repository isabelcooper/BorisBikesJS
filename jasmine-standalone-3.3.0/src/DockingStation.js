function DockingStation() {
  this.bikes =  []
}

DockingStation.prototype.dockBike = function(bike) {
  this.bikes.push(bike)
}

DockingStation.prototype.borrowBike = function(bike) {
  this.removeBike(bike)
};

DockingStation.prototype.removeBike = function(bike) {
  this.bikes = this.bikes.filter(function(docked_bike) {
    return docked_bike !== bike
  });
};
