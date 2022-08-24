var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

console.log(today)

var date_box = document.getElementById('date')
console.log(date_box)
date_box.innerHTML = today

var login_button = document.getElementById('login-button')




function login()
{
    console.log(1)
    var username = document.getElementById('username_box')
    console.log(username.value)
    var password = document.getElementById('password_box')
    console.log(password.value)
}

login_button.addEventListener('click',login,false)

