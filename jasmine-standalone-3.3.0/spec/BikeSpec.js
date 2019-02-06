describe("Bike", function() {

  beforeEach(function() {
    bike = new Bike;
  });

  it('should be a working bike', function() {
    expect(bike.isWorking).toEqual(true)
  });

  it('should mark bike as not working', function() {
    bike.reportBroken()
    expect(bike.isWorking).toEqual(false)
  });
});
