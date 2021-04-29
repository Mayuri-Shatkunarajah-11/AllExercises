let num=prompt("Enter the number between 0 and 20");
if(num==""||isNaN(Number(num))){
 num=prompt("Enter the correct number");
}
while(num>20 || num<0){
    num=prompt("Please enter the number between 0 and 20");
}
if(num%2==0){
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}

