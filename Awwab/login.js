function login(){
    var enterEmail = document.getElementById('Email').value;
    var enterPassword = document.getElementById('Password').value;

    var getEmail= localStorage.getItem('UserEmail');
    var getPassword= localStorage.getItem('UserPassword');

    if(enterEmail!=getEmail && enterPassword!=getPassword){
        email_error.style.display = "block";
    pass_error.style.display = "block";
    }
    else if (enterEmail!=getEmail){
        email_error.style.display = "block";
    }
    else if(enterPassword!=getPassword){
        pass_error.style.display = "block";
    }
    else{
        window.location.href='./loginsuccess.html';
    }

    
}