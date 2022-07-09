const passwordCheck = document.querySelector("#password").value;
if(passwordCheck.length >= 5 && passwordCheck.length <= 20){
    if(passwordCheck.match(/^(?=.*[-+_!@#$%^&*., ?])/)){
        if(passwordCheck.match(/^(?=.*[a-z])(?=.*[A-Z])/)){
            if(passwordCheck.match(/(?=.*[0-9])/)){
                document.querySelector('#succesdiv').style.display = "block";
            } 
        } 
    }
}  else {
    
}

     
  

  function showDiv(selector, color){
    document.querySelector(selector).style.color = color;
     }