    


function checkPassword() {
    const passwordCheck = document.querySelector("#password").value;
    console.log(passwordCheck);
    if(passwordCheck.includes("&") || passwordCheck.includes("!") || passwordCheck.includes(".") || passwordCheck.includes("/") || passwordCheck.includes("?") || 
    passwordCheck.includes("@") || passwordCheck.includes("*")){
        document.querySelector('.SC').style.color = "green";
    } else {
        document.querySelector('.SC').style.color = "orangered";
    }
    console.log(passwordCheck.length);
    if(passwordCheck.length >= 5 && passwordCheck.length <= 20){
        document.querySelector('.LC').style.color = "green";
    } else {
        document.querySelector('.LC').style.color = "orangered";
    }

    if(passwordCheck.matches("^(?=.*?[A-Z][a-z])$")){
        document.querySelector('.LUC').style.color = "green";
    } else {
        document.querySelector('.LUC').style.color = "orangered";
    }

    if(passwordCheck.includes(0) || passwordCheck.includes("1") || passwordCheck.includes("2") || passwordCheck.includes("3") || passwordCheck.includes("4") || 
    passwordCheck.includes("5") || passwordCheck.includes("6") || passwordCheck.includes("7") || passwordCheck.includes("8") || passwordCheck.includes("9")){
        document.querySelector('.NC').style.color = "green";
    } else {
        document.querySelector('.NC').style.color = "orangered";
    }
     
  }
