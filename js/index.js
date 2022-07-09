    


function checkPassword() {
    const passwordCheck = document.querySelector("#password").value;
    if(passwordCheck.match(/^(?=.*[-+_!@#$%^&*., ?])/)){
        changeColor('.SC', "green");
    } else {
        changeColor('.SC', "orangered");
    }
    if(passwordCheck.length >= 5 && passwordCheck.length <= 20){
        changeColor('.LC', "green");
    } else {
        changeColor('.LC', "orangered");
    }

    if(passwordCheck.match(/^(?=.*[a-z])(?=.*[A-Z])/)){
        changeColor('.LUC', "green");
    } else {
        changeColor('.LUC', "orangered");
    }

    if(passwordCheck.match(/(?=.*[0-9])/)){
        changeColor('.NC', "green");
    } else {
        changeColor('.NC', "orangered");
    }
     
  }

  function changeColor(selector, color){
    document.querySelector(selector).style.color = color;
  }
