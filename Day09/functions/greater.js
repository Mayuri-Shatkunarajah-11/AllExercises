function myFunction(a,b){
    if(a>b){
        console.log(`The greater number of ${a} and ${b} is ${a}`);
    }
    else if(b>a){
        console.log(`The smaller number of ${a} and ${b} is ${a}`);
    }
}myFunction(40,34);
myFunction(10,20);
function myFunction(a,b,c){
    if((a>b)&&(a>c)){
        return Math.max(a,b,c);
    }else if(b>c){
            return Math.max(a,b,c);
        }
        else{
            return Math.max(a,b,c);
        }
}console.log(`The greater number of 40 and 34 ${myFunction(40,34,56)}`);
console.log(`The greater number of 10 and 2 ${myFunction(10,2,8)}`);
