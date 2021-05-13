let personName=prompt("enter your name");
while(personName==""){
 personName=prompt("please enter the name");   
}
function numChar(name){
return name.length;
}

console.log(numChar( personName));
