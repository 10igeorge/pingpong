var countingUp = function(userNumber){
  var output = [];
  if (typeof userNumber === 'number'){
    for (var i = 1; i <= userNumber; i++) {
        output.push(i);
    } return output;
  } else {
    return "Error";
  }
};
