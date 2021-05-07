//Object
var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        cover: "https://m.media-amazon.com/images/I/416Hql52NCL.jpg"
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        cover: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
    }
];
​
let main = document.getElementsByTagName("main")[0];

// add a P element with title and author
/* books.forEach(function(value){
   main.innerHTML = main.innerHTML + "<p>" + value.title + " - " + value.author + "</p>";
   // h1 = h1 p
   // h1 p = h1 p p
   // h1 p p
}) */

let list = document.getElementsByTagName("ul")[0];
let booksList = "";
books.forEach(function(value){
    if (value.alreadyRead) {
        //When the value of alreadyRead is true, then do something here!
        booksList = booksList + "<li>" + value.title + " - " + value.author + " - <a href=\"" + value.cover + "\">Cover</a></li>";
    } else {
        //When alreadyRead is false, do something here
        booksList = booksList + "<li ><span class=\"not-read\">" + value.title + "</span> - " + value.author + " - <a href=\"" + value.cover + "\">Cover</a></li>";
    }
    
   // h1 = h1 p
   // h1 p = h1 p p
   // h1 p p
});
list.innerHTML = booksList
let notRead = document.querySelector(".not-read");
notRead.style.backgroundColor = "red";

​