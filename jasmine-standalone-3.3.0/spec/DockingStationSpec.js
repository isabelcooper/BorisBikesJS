describe("Docking Station", function() {

  var ds

  beforeEach(function() {
    ds = new DockingStation
  });

  describe("initialize", function() {
    it ('should initialise with no bikes', function() {
      expect(ds.bikes).toEqual([])
    });
  });

  describe("dock bike", function() {
    it ('should dock a given bike in the station', function() {
      ds.dockBike("bike")
      expect(ds.bikes).toEqual(["bike"])
    });
  });

  describe("borrow bike", function() {
    it ('should remove a specific bike from the station', function() {
      ds.dockBike("bike")
      ds.dockBike("bike2")
      ds.borrowBike("bike")
      expect(ds.bikes).toEqual(["bike2"])
    });
  });
});
