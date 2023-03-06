var txtEmail = document.getElementById('Email');
var txtPassword = document.getElementById('Password');



var tutorDetails = [];
var user = {
    txtEmail: '',
    txtPassword:''
}
function register(){
   let txtEmail = txtEmail.value;
   let txtPassword= txtPassword.value;
    

   if(txtEmail== '' && txtPassword==''){
    
    email_error.style.display = "block";
    pass_error.style.display = "block";
   }
   else if (txtEmail  == ''){
    email_error.style.display = "block";
   }
   else if (txtPassword == '') {
    pass_error.style.display = "block";
   }
   else{
    window.location.href='./login.html';
   }
  

   
   localStorage.setItem('UserEmail', txtEmail);
   localStorage.setItem('UserPassword', txtPassword);
   
 

    }

    function logout(){
        confirm('Do you want to Logout?');
        localStorage.removeItem("UserEmail");
        localStorage.removeItem("UserPassword");
        window.location.href='./registration.html';
    }
   



    



   