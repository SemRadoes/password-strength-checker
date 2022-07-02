    


function checkPassword() {
    const passwordCheck = document.querySelector("#password").value;
    console.log(passwordCheck);
    if(passwordCheck.includes("!") || passwordCheck.includes(".") || passwordCheck.includes("/") || passwordCheck.includes("?") || 
    passwordCheck.includes("@") || passwordCheck.includes("*")){
        document.querySelector('.SC').style.color = "green";
    } else {
        document.querySelector('.SC').style.color = "orangered";
    }
  }
