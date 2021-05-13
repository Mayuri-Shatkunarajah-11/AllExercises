let billAmount=Number(prompt("Enter the bill amount"));
let tipRate=Number(prompt("Enter the tip rate"));
let tip;
let totalamount;
function tipFunction(bill,tiprate){
    tip=Math.round(bill*(tiprate/100));
    totalAmount=billAmount+tip;
console.log(`The bill amount is CHF ${billAmount} ,the tip rate is CHF
     ${tipRate},the tip is CHF ${tip} so the total bill amount is  CHF ${totalAmount}`);
 }
 tipFunction(billAmount,tipRate);