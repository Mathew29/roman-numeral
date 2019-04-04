var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;


function conversion(number) {
  if (number > 3999) {
    return "not a roman numeral"
  } else if (number >= 1000){
    //thousandsDigit() // M
    //hundredsDigit() //C
    //tensDigit() // returns XX
    onesDigit() // return VIII
  } else if (number >= 500){
    //hundredsDigit()
    //tensDigit()
    onesDigit()
  } else if (number >= 100){
    //hundredsDigit()
    //tensDigit()
    onesDigit()
  } else if (number >= 50){
    //tensDigit()
    onesDigit()
  } else if (number >= 10){
    //tensDigit()
    onesDigit()
  } else if (number >= 5){
    var roman = onesDigit(number)
  } else if (number > 0){
    var roman = onesDigit(number)

  } else {
    return "not a roman numeral"
  }
  // concatinate MCXXVIII
  // checkForThreeInARow(); returns string of 3 in a row. ex: "I"
  // converts(return char from checkForThreeInARow function);
  // if 4 in a row is I, input ex: 4 return IV
  // if 4 in a row is X, input ex: 40 return XL
  return roman;
}


function math() {

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

//user interface
// var number = $("input#number").val;
var number = 7;
console.log(conversion(number));
