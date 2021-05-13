let quote=prompt("Enter the quote");
let author=prompt("Enter the author name");
while(quote==""||author==""){
    quote=prompt("Please enter the quote");
 author=prompt("please enter the  author name");
}
function myQuote(q,a){
    
    return `${a} says ${q}`;
}
console.log(myQuote(quote,author));