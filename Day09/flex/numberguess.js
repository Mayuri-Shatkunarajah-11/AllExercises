let typeNumber = prompt(`I am thinking of an integer between 1 and 100.`);
let number = Math.floor(Math.random()* 100) + 1;

while(number!=typeNumber){

 if(typeNumber > number){
    typeNumber = prompt(`your number is higher`)

}else if (typeNumber <number){
    typeNumber= prompt(`your number is lower`)
    

}
}
    alert(`your nummber is correct!!`);


