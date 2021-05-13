function validate(){
    var username=document.getElementById("fname");
    var password=document.getElementById("pass");
    if (username.value=="" ||password.value==""){
        alert("enter the username and password");
        return false
    }
    else{
        return true;
    }
}