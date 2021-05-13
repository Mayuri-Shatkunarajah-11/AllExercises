var password="mypass12";
 
        let username=prompt("Enter the password");
        
        let input=document.querySelector("input");
        let btn=document.querySelector("btn");
      
       function checkPass(){
            if(password==username){
                return true;
             } else{
                    return false;
                }
          }
            while(checkPass()!=true){
              username=prompt("Enter the correct password");

            }
            //Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var form = this.parentElement;
    form.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("mytask").value = "";

  var button= document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var form = this.parentElement;
      form.style.display = "none";
    }
  }
}