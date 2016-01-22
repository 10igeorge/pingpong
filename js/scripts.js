var pingPong = function(userNumber){
  var array = [];
  for (var i = 1; i <= userNumber; i++){
    while (i <= userNumber){
      array.push(i);
        if (i % 15 === 0){
          array.splice([i-1], 1, "pingpong");
          i += 1;
        } else if (i % 5 === 0){
          array.splice([i-1], 1, "pong");
          i += 1;
        } else if (i % 3 === 0){
          array.splice([i-1], 1, "ping");
          i += 1;
        } else {
          array.splice([i-1], 1, i);
          i += 1;
        }
    }
  } return array.join(", ");
};

$(document).ready(function() {
  $('button#play').click(function() {
    var userNumber = parseInt($('input#number').val());
    var final = pingPong(userNumber);
    $('#results').text(final);
  });
});
