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
  } else if (number >= 1000) {
    var thousands = parseInt(numArray[0]);
    var hundreds = parseInt(numArray[1]);
    var tens = parseInt(numArray[2]);
    var ones = parseInt(numArray[3]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    var roman3 = hundredsDigit(hundreds);
    var roman4 = thousandsDigit(thousands);
    var finishedRoman = roman4+roman3+roman2+roman1;
  } else if (number >= 100){
    var hundreds = parseInt(numArray[0]);
    var tens = parseInt(numArray[1]);
    var ones = parseInt(numArray[2]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    var roman3 = hundredsDigit(hundreds);
    var finishedRoman = roman3+roman2+roman1;
  } else if (number >= 10){
    var tens = parseInt(numArray[0]);
    var ones = parseInt(numArray[1]);
    var roman1 = onesDigit(ones);
    var roman2 = tensDigit(tens);
    var finishedRoman = roman2+roman1;
  } else if (number > 0){
    var ones = parseInt(numArray[0]);
    var roman1 = onesDigit(ones);
    var finishedRoman = roman1;
  } else {
    return "not a roman numeral"
  }
  return finishedRoman;
}


function turnNumberToArray(number) {

  var numArray = (""+number).split("");
  return numArray;
}

function onesDigit(number) {
  var onesDigitArray = [];
  if(number === 4) {
    onesDigitArray += "IV";
  }
  else if(number === 9) {
    onesDigitArray +="IX";
  }
  else if (number >= 5) {
    onesDigitArray +="V";
    for (var a = 0; a < number - 5; a++) {
      onesDigitArray +="I";
    }
  }
  else {
    for (var a = 0; a < number; a++) {
      onesDigitArray +="I";
    }
  }
  return onesDigitArray;
}
function tensDigit(number) {
  var tensDigitArray = [];
  if(number === 4) {
    tensDigitArray +="XL";
  }
  else if(number === 9) {
    tensDigitArray +="XC";
  } else if (number >= 5) {
    tensDigitArray +="L";
    for (var a = 0; a < number - 5; a++) {
      tensDigitArray +="X";
    }
  } else {
      for (var a = 0; a < number; a++) {
        tensDigitArray +="X";
      }
  }
  return tensDigitArray;
}
function hundredsDigit(number) {
  var hundredsDigitArray = [];
  if(number === 4) {
    hundredsDigitArray +="CD";
  }
  else if(number === 9) {
    hundredsDigitArray +="CM";
  } else if (number >= 5) {
    hundredsDigitArray +="D";
    for (var b = 0; b < number - 5; b++) {
      hundredsDigitArray +="C";
    }
  } else {
    for (var b = 0; b < number; b++){
      hundredsDigitArray +="C";
    }
  }
  return hundredsDigitArray
}
function thousandsDigit(number) {
  var thousandsDigitArray = []
  for (var a = 0; a < number; a++) {
    thousandsDigitArray += "M";
  }
  return thousandsDigitArray;
};

//user interface
$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var result = conversion(number);
    $("#result").show();
    $("#result").text(result);


  });
});
