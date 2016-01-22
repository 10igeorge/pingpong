var pingPong = function(userNumber){
  var array = [];
  for (var i = 1; i <= userNumber; i++){
    while (i <= userNumber){
      array.push(i);
        if (i % 3 === 0){
          array.splice([i-1], 1, "<li>ping</li>");
          i += 1;
        } else if (i % 5 === 0){
          array.splice([i-1], 1, "<li>pong</li>");
          i += 1;
        } else {
          i += 1;
        }
    }
  } return array.join(", ");
};




//
// var countingUp = function(userNumber){
//   debugger;
//   var output = [];
//   if (typeof userNumber === 'number'){
//     for (var i = 1; i <= userNumber; i++) {
//         output.push(i);
//     } return output;
//   }
// };
//
//
// countingUp(10);
