let account={
    name:"samuel",
    age:2,
    place:"Switzerland",
    comment1:"",
}
let twitter=[];
function tweet(){

for(let i=0;i<5;i++){
    let comment=prompt("Your comments");
while(comment==""){
    comment=prompt("your comments");
    twitter+=comment;
}

}
console.log(twitter);
console.log(account.comment1);
while(account.comment1.length>1){
twitter=comment.push();
console.log(twitter);
console.log(account.name+" tweet is:"+" "+comment);
}}
tweet();