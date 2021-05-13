let age=Number(prompt("Enter the age"));
let retireAge=Number(prompt("what age would you like to retire"));
function retireFunction(age1,retireAge1){
if(retireAge1<age1){
retireAge1=Number(prompt("Enter the retire age is greater than age"));
}else{
let ageDiff=retireAge1-age1;
let currentYear= new Date().getFullYear();
let futureYear=currentYear+ageDiff;
    console.log(` You have ${ageDiff} years left. It's ${currentYear} , so you can retire in ${futureYear}`);
}
}
retireFunction(age,retireAge);