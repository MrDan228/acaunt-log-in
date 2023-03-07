let button = document.getElementById('button');
let userName = document.getElementById('user');
let userPassword = document.getElementById('password');
let text = document.getElementById('text');
let counter = 0

let getUserName = localStorage.getItem('UserName');
let getUserPassword = localStorage.getItem('UserPassword');

button.addEventListener('click', click)

function iff(){
    if(localStorage.getItem('counter') == 1){
        text.style.display = 'block';
        text.textContent += ' ' + "'" + localStorage.getItem('UserName') + "'";
        userName.style.display = 'none';
        userPassword.style.display = 'none';
        button.style.display = 'none';
        } else{
        text.style.display = 'none';
        userName.style.display = 'block';
        userPassword.style.display = 'block';
        button.style.display = 'block';
        }
}
function click() {
localStorage.setItem('UserName', userName.value)
localStorage.setItem('UserPassword', userPassword.value)
counter = 1;
localStorage.setItem('counter', counter)

iff();
}

iff();