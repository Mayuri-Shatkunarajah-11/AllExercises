
let books={
    book1:{
        name:"Ponniyin selven",
        price:200,
        sold:"yes"
    },
    book2:{
        name:"Davin",
        price:300,
        sold:"no"
    },
    book3:{
        name:"",
        price:200,
        sold:"yes"
    }
}
let txt="";
console.log(books.book1.name);


function booklist(){

let main=document.querySelector("main");
let li=document.createElement("li");
let booklist=document.getElementById("booklist");
for(let x in books){
    li+=books[x]+" ";
   booklist.appendChild(li);
}
console.log(books);
}