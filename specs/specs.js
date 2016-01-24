describe('pingPong', function() {
  it("replace any number divisible by 15 with 'pingpong'", function() {
    expect(pingPong(15)).to.equal("1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong");
  });
  it("replace any number divisible by 3 with 'ping'", function() {
    expect(pingPong(3)).to.equal("1, 2, ping");
  });
  it("replace any number divisible by 5 with 'pong'", function() {
    expect(pingPong(5)).to.equal("1, 2, ping, 4, pong");
  });
});

describe('negativeInput', function() {
  it("will alert user of error if negative number is inputted", function() {
    expect(negativeInput(-4)).to.equal("Please enter a value greater than 0");
  });
});
