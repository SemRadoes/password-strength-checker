const form = document.querySelector('#validateForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordCheck = document.querySelector("#password").value;
    if(passwordCheck.length >= 5 && passwordCheck.length <= 20){
        if(passwordCheck.match(/^(?=.*[-+_!@#$%^&*., ?])/)){
            if(passwordCheck.match(/^(?=.*[a-z])(?=.*[A-Z])/)){
                if(passwordCheck.match(/(?=.*[0-9])/)){
                    document.querySelector('#succesdiv').style.display = "block";
                    setTimeout(() => {document.querySelector('#succesdiv').style.display = "none"},1500);
                } 
            } 
        }
    }  else {
        document.querySelector('#errordiv').style.display = "block";
        setTimeout(() => {document.querySelector('#errordiv').style.display = "none"},1500);
    }
})

