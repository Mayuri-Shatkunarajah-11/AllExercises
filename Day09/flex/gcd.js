let firstNumber1=Number(prompt("Enter the first number"));
let secondNumber1=Number(prompt("Enter the second number"));
let firstNumber;
let secondNumber;
let gcd=0;
let remainder=0;
while(firstNumber1<0 ||!Number.isInteger(firstNumber1) || 
secondNumber1<0 ||!Number.isInteger(secondNumber1)){
    firstNumber=Number(prompt("Please enter the positive number"));
    secondNumber=Number(prompt("Please enter the positive number"));
    
}
do {
 remainder=firstNumber%secondNumber;
  if (remainder===0) {
gcd=secondNumber;
break;
}
else{
    firstNumber=secondNumber;
    secondNumber=remainder;
    
}
}while(remainder>0)
console.log(`The greater common divisor of  ${firstNumber1} and ${secondNumber1} is ${gcd}` );
