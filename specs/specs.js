// describe('countingUp', function() {
//   it("will count up to the user number by 1", function() {
//     expect(countingUp(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
//   });
// });
describe('pingPong', function() {
  it("replace any number divisible by 3 with 'ping' and add into an unordered list", function() {
    expect(pingPong(3)).to.equal("<li>ping</li>");
  });
  it("replace any number divisible by 5 with 'pong' and add into an unordered list", function() {
    expect(pingPong(5)).to.equal("<li>pong</li>");
  });
});
