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
    var thousands = parseInt(numArray[0]);
    var hundreds = parseInt(numArray[1]);
    var tens = parseInt(numArray[2]);
    var ones = parseInt(numArray[3]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    var roman3 = hundredsDigit(hundreds);
    var roman4 = thousandsDigit(thousands);
    console.log(roman4+roman3+roman2+roman1);
  } else if (number >= 100){
    var hundreds = parseInt(numArray[0]);
    var tens = parseInt(numArray[1]);
    var ones = parseInt(numArray[2]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    var roman3 = hundredsDigit(hundreds);
    console.log(roman3+roman2+roman1)
  } else if (number >= 10){
    var tens = parseInt(numArray[0]);
    var ones = parseInt(numArray[1]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    console.log(roman2+roman1);
  } else if (number > 0){
    var ones = parseInt(numArray[0]);
    var roman1 = onesDigit(ones);
    console.log(roman1);
  } else {
    return "not a roman numeral"
  }

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
  var onesDigitArray = [];
  if(number === 4) {
    onesDigitArray.push("IV");
  }
  else if(number === 9) {
    onesDigitArray.push("IX");
  }
  else if (number >= 5) {
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
  var tensDigitArray = [];
  if(number === 4) {
    tensDigitArray.push("XL");
  }
  else if(number === 9) {
    tensDigitArray.push("XC");
  } else if (number >= 5) {
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
  console.log(number)
  var hundredsDigitArray = [];
  if(number === 4) {
    hundredsDigitArray.push("CD");
  }
  else if(number === 9) {
    hundredsDigitArray.push("CM");
  } else if (number >= 5) {
    hundredsDigitArray.push("D");
    for (var b = 0; b < number - 5; b++) {
      hundredsDigitArray.push("C");
    }
  } else {
    for (var b = 0; b < number; b++){
      hundredsDigitArray.push("C")
    }
  }
  return hundredsDigitArray
}
function thousandsDigit(number) {
  console.log(number);
  var thousandsDigitArray = []
  for (var a = 0; a < number; a++) {
    thousandsDigitArray.push("M")
  }
  return thousandsDigitArray;
};

//user interface
// var number = $("input#number").val;
var number = 1444;
conversion(number);
