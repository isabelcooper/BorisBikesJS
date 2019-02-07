describe("Docking Station", function() {

  var ds

  beforeEach(function() {
    ds = new DockingStation
    workingBike = new Bike
    spyOn(workingBike, 'isWorking').and.returnValue(true)
  });

  describe("initialize", function() {
    it ('should initialise with no bikes', function() {
      expect(ds.bikes).toEqual([])
    });
  });

  describe("dock bike", function() {
    it ('should dock a given bike in the station', function() {
      ds.dockBike(workingBike)
      expect(ds.bikes).toEqual([workingBike])
    });
  });

  describe("borrow bike", function() {

      describe("when bike is working", function (){

        beforeEach(function() {
          workingBike = new Bike
          spyOn(workingBike, 'isWorking').and.returnValue(true)
        });

        it ('should remove a specific bike from the station', function() {
          ds.dockBike(workingBike)
          ds.dockBike("bike2")
          ds.borrowBike(workingBike)
          expect(ds.bikes).toEqual(["bike2"])
        });
      });

    describe("when bike is not working", function(){

      beforeEach(function() {
        brokenBike = new Bike
        spyOn(brokenBike, 'isWorking').and.returnValue(false)
      });

      it ('should not release bike if bike is not working', function() {
        console.log(ds)
        ds.dockBike(brokenBike)
        expect(function(){ds.borrowBike(brokenBike)}).toThrow("This bike is broken")
      });
    });
  });
});
