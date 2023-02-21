var txtUsername = document.getElementById('txtUsername');
var txtPassword = document.getElementById('txtPassword');
var object = [];
var Users = {
    Id : "1",
    Username : "usama",
    Password : "hyderabad",
}
function login() {
    let username = txtUsername.value;
    let password = txtPassword.value;
    if (username.toUpperCase() === Users.Username.toUpperCase() && password.toUpperCase() === Users.Password.toUpperCase()) {
        localStorage.setItem("object",JSON.stringify(Users));
        localStorage.setItem("g_id",Users.Id);
        localStorage.setItem("isLogin",true);
        window.location.href='./index.html';
    }else{
        alert("Invalid Login Details");
    }
}
function logout() {
    alert("logout");
    localStorage.removeItem("g_id");
    localStorage.removeItem("isLogin");
    window.location.href='./login.html';
}
function isCheckLogin() {
    let isLogin = localStorage.getItem("isLogin");
    console.log(isLogin);
    let g_id = localStorage.getItem("g_id");
    console.log(g_id);

    let users = JSON.parse(localStorage.getItem("object"));
    console.log(users);

    if(isLogin === true){
        console.log(users);
        alert('Already Login.' );
    }else{
        return;
    }
}
