


let list=["meeting","exercise","project","learning","break"];
let done=[];
let left=[];
let val=[];
let t=new Date();
let currentTime=t.toLocaleTimeString();
console.log(currentTime);
console.log("The total number of task is"+list.length);
//New list
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
        
       
        

function todolist(){
for(let i=0;i<list.length;i++){
 console.log("The task"+(i+1)+"is"+list[i]);
    if (true){
      console.log("The"+[i]+"task is completed");
      val=list[i];
      console.log(val);
      done=val.pop();
      console.log(done);
      left=done.push();
      console.log()
      console.log(left);
    }else{
        console.log("do the task");
    }

}
}
todolist();
