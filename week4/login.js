function validate()
{
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  if(email == "abhay@gmail.com" && password == "abhay")
  {
    alert("login succesfully");
    return false;
  }else{
    
    alert("login failed")
  }

}
let state = false
function show() {
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