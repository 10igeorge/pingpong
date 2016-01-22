var pingPong = function(userNumber){
  var array = [];
  for (var i = 1; i <= userNumber; i++){
    if (i % 3 === 0){
      array.push("<li>ping</li>");

    }
  } return array.join(" ");
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
