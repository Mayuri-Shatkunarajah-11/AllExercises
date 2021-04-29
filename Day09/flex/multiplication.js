
for(let i=1;i<=10;i++){
    let mul=i*9;
    console.log(`${i} * 9 =${mul}`);

}

let val=prompt("Enter the number between 0 and 10");
if(val==""||isNaN(Number(val)))
{
  val=prompt("Enter the correct number");
}
while(val>10 || val<0){
    val=prompt("Enter the number between 0 and 10");
}
  let result=val*9;
  console.log(result);