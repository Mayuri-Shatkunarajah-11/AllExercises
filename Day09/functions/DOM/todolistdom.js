var password = 'm';
let temparr = ['Meeting','Presentation','Exercise'];

let username = prompt ('Enter the password');
let ul = document.querySelector ('ul');
let input = document.querySelector ('input');
let btn = document.querySelector ('btn');
checkPass();
function checkPass () {
  return password === username;
}

while (checkPass () != true) {
  username = prompt ('Enter the correct password');

}

    let main=document.querySelector("main");
    main.style.display="block";


function addtodo () {
  let mynew = document.getElementById ('list');
  let inputvalue = document.getElementById ('mytask').value;
  mynew.innerHTML = ' ';
  temparr.push (inputvalue);
  temparr.sort ();
  for (let i = 0; i < temparr.length; i++) {
    let li = document.createElement ('li');
     
   
    li.innerText = temparr[i];
    mynew.appendChild (li);
  }
}


function removelist () {
  let clear = document.getElementById ('list');
  let mytask = document.getElementById ('mytask');
  temparr.pop (mytask.value);
  clear.innerHTML = '';
  for (let i = 0; i < temparr.length; i--) {
    let li = document.querySelector ('li');
    //li.innerText = listing[i]
    clear.removeChild (li);
  }
}
