function validate()
{
  const email=document.getElementById("email").Value;
  const password=document.getElementById("password").Value;

  if(email == "abhay@gmail.com" && password == "abhay")
  {
    alert("login succesfully");
    return false;
  }else{
    
    alert("login failed")
  }

}
let state = false
function toggle(){
  if (state){
    document.getElementById("password")
    setAttribute("type","password");
    state = false;
  }else{
    document.getElementById("password")
    setAttribute("type","text");
    state = true;
  }

}