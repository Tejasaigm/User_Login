const myBody = document.getElementById('myBody');
const Container = document.getElementById('container');
const username = document.getElementById('reg-username');
const password = document.getElementById('reg-password');
const conformPass = document.getElementById('con-password');
const Username = document.getElementById('login-username');
const Password = document.getElementById('login-password');
var b;
function theme()
{
    if(b==1)
        {
            document.getElementById('theme-icon').className= "bi bi-brightness-low-fill icon-body";
            document.getElementById('theme-icon').style.color = 'black';
            b=0;
        }
        else
        {
            document.getElementById('theme-icon').className= "bi bi-brightness-high" ;
            document.getElementById('theme-icon').style.color = 'white';
            b=1
        }
        if(b==1)
            {
                myBody.style.backgroundColor='#000000';
                myBody.style.transition = 'background-color 0.4s';
               Container.style.transition = 'background-color 0.6s'
                Container.style.backgroundColor='#1F1F1E'
                username.style.backgroundColor='#555555';
                password.style.backgroundColor='#555555';
                conformPass.style.backgroundColor='#555555';
                Username.style.backgroundColor='#555555';
                Password.style.backgroundColor='#555555';
                
            }
            else{
                myBody.style.backgroundColor='#f2f2f2';
                Container.style.backgroundColor='#ffffff';
                myBody.style.transition = 'background-color 0.4s';
                Container.style.transition = 'background-color 0.6s';
                username.style.backgroundColor='#f5f2f283';
                password.style.backgroundColor='#f5f2f283';
                conformPass.style.backgroundColor='#f5f2f283';
                Username.style.backgroundColor='#f5f2f283';
                Password.style.backgroundColor='#f5f2f283';
                
                
                
            }
}
window.onload=document.getElementById('icon-theme').className="bi bi-brightness-high";

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const conformPass = document.getElementById('con-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('conformPass',conformPass);
        alert('Registration successful!');
        document.getElementById('registration-page').style.display = 'none';
        document.getElementById('login-page').style.display = 'block';
    } else {
        alert('Please enter a username and password.');
    }
}
var a;
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedConformPass = localStorage.getItem('conformPass');



    if (username === storedUsername && password === storedPassword && password === storedConformPass) {
        alert('Login successful!');
        document.getElementById('login-page').style.display = 'none';
        window.location.href='home.html';
    } else {
        alert('Invalid username or password.');
    }
}
var a;
function pass()
{
    if(a==1)
    {
        document.getElementById("login-password").type='password';
        document.getElementById('pass-icon').className="bi bi-eye-slash";
        a=0;
    }
    else
    {
        document.getElementById("login-password").type='text';
        document.getElementById('pass-icon').className='bi bi-eye';
        a=1;
    }
    if(password.value==""){
        document.getElementById('pass-icon').className="bi bi-eye-slash";
    }

}

