let slide=['http://placekitten.com/g/200/300','http://placekitten.com/g/300/300','http://placekitten.com/g/400/300'];
let index=0;
function previous(){
    let img=document.querySelector("img");
    img.setAttribute("src",slide[index]);
    index--;
    if (index==0){
        
    }
    
    
    
}
function next(){
    let img=document.querySelector("img");
    img.setAttribute("src",slide[index]);
   index++;
}