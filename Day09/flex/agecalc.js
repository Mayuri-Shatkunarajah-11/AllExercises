let birthYear1=prompt("Enter your birthyear ");
let birthMonth1=prompt("Enter the month");
let current=new Date();
let currentmonth=current.getMonth()+1;
let futureyear1=prompt("Enter your future");
let futureAge;

function myAgefunction(birthYear,futureyear,birthMonth){
while(birthYear==""||isNaN(Number(birthYear))){
    birthYear=prompt("Please enter the valid birthyear");
    
}
while(futureyear==""||isNaN(Number(futureyear))){
    futureyear=prompt("Please enter the valid futureyear");
    
}
while(birthMonth==""||isNaN(Number(birthMonth))){
    birthMonth=prompt("Please enter the valid Month")
}

while(Number(futureyear)<=Number(birthYear)){
    futureyear=prompt("Please enter the valid futureyear");
    
} 
console.log(birthMonth);
console.log(currentmonth);
if(birthMonth<=currentmonth){
 futureAge=futureyear-birthYear-1;
}else{
 futureAge=futureyear-birthYear;
}
console.log(`I will be ${futureAge} 
years old in ${futureyear}`);
}
myAgefunction(birthYear1,futureyear1,birthMonth1);
