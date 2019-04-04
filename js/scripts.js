var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;


function conversion(number) {
  var numArray = turnNumberToArray(number)
  if (number > 3999) {
    return "not a roman numeral"
  } else if (number >= 1000){
    //thousandsDigit() // M
    //hundredsDigit() //C
    //tensDigit() // returns XX
    onesDigit() // return VIII
  } else if (number >= 100){
    //hundredsDigit()
    //tensDigit()
    onesDigit()
  } else if (number >= 10){
    var tens = parseInt(numArray[0])
    var ones = parseInt(numArray[1])
    var roman1 = onesDigit(ones)
    var roman2 = tensDigit(tens)
    console.log(roman2+roman1)
  } else if (number > 0){
    var ones = parseInt(numArray[0])
    var roman1 = onesDigit(ones)

  } else {
    return "not a roman numeral"
  }
  // concatinate MCXXVIII
  // checkForThreeInARow(); returns string of 3 in a row. ex: "I"
  // converts(return char from checkForThreeInARow function);
  // if 4 in a row is I, input ex: 4 return IV
  // if 4 in a row is X, input ex: 40 return XL

  // var finishedRoman = "roman4+roman3+roman2+roman1";
  //return finishedRoman;
}


function turnNumberToArray(number) {

  var numArray = (""+number).split("");

  console.log(numArray);
  return numArray;
}

function onesDigit(number) {
  console.log(number);
  var onesDigitArray = []
  if (number >= 5) {
    onesDigitArray.push("V");
    for (var a = 0; a < number - 5; a++) {
      onesDigitArray.push("I");
    }
  }
  else {
    for (var a = 0; a < number; a++) {
      onesDigitArray.push("I");
    }
  }
  return onesDigitArray;
}
function tensDigit(number) {
  var tensDigitArray = []
  if (number >= 5) {
    tensDigitArray.push("L");
    for (var a = 0; a < number - 5; a++) {
      tensDigitArray.push("X");
    }
  } else {
      for (var a = 0; a < number; a++) {
        tensDigitArray.push("X");
      }
  }
  return tensDigitArray;
}
function hundredsDigit(number) {
  var hundredsArray = []
  if (number >= 5) {
    hundredsArray.push("D");
    for (var b = 0; b < number - 5; b++) {
      hundredsArray.push("C");
    }
  } else {
    for (var b = 0; b < number; b++){
      hundredsArray.push("C")
    }
  }
}
//user interface
// var number = $("input#number").val;
var number = 62;
console.log(conversion(number));
