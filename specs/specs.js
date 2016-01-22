describe('countingUp', function() {
  it("will count up to the user number by 1", function() {
    expect(countingUp(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});
describe('pingPong', function() {
  it("replace any number divisible by 15 with 'pingpong'", function() {
    expect(pingPong(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});
