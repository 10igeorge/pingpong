describe('pingPong', function() {
  it("replace any number divisible by 15 with 'pingpong' and add into an unordered list", function() {
    expect(pingPong(15)).to.equal("1, 2, <li>ping</li>, 4, <li>pong</li>, <li>ping</li>, 7, 8, <li>ping</li>, <li>pong</li>, 11, <li>ping</li>, 13, 14, <li>pingpong</li>");
  });
  it("replace any number divisible by 3 with 'ping' and add into an unordered list", function() {
    expect(pingPong(3)).to.equal("1, 2, <li>ping</li>");
  });
  it("replace any number divisible by 5 with 'pong' and add into an unordered list", function() {
    expect(pingPong(5)).to.equal("1, 2, <li>ping</li>, 4, <li>pong</li>");
  });
});
