let birthYear=prompt("Enter your birthyear ");
let futureyear=prompt("Enter your future");
let isValid=true;
/*if(birthYear==""||isNaN(Number(birthYear))){
    birthYear=prompt("Please enter the valid birthyear");
    isValid=false;
}
if(futureyear==""||isNaN(Number(futureyear))){
    futureYear=prompt("Please enter the valid futureyear");
    isValid=false;
}

if(futureyear<=birthYear){
    futureYear=prompt("Please enter the valid futureyear");
    isValid=false;
}
 if(isValid){
     let futureAgeBeforeBirth=futureyear-birthYear-1;
let futureAgeAfterBirth=futureyear-birthYear;
console.log(`I will be either${futureAgeBeforeBirth} or ${futureAgeAfterBirth}
 years old in ${futureyear}`);
 
     */
    while(birthYear==""||isNaN(Number(birthYear))){
        birthYear=prompt("Please enter the valid birthyear");
        
    }
    while(futureyear==""||isNaN(Number(futureyear))){
        futureYear=prompt("Please enter the valid futureyear");
        
    }
    
    while(Number(futureyear)<=Number(birthYear)){
        futureYear=prompt("Please enter the valid futureyear");
        
    }  
let futureAgeBeforeBirth=futureyear-birthYear-1;
let futureAgeAfterBirth=futureyear-birthYear;
console.log(`I will be either${futureAgeBeforeBirth} or ${futureAgeAfterBirth}
 years old in ${futureyear}`);
 