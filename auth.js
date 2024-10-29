//Toggle hamburger menu//
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLink')
hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('active')
navLinks.classList.toggle('show')
})


const loginLink = document.getElementById('loginLink')
const registerLink = document.getElementById('registerLink')
const logoutBtn = document.getElementById('logoutBtn')

let  IsLoggedIn = localStorage.getItem('authenticatedUser')=== 'true'


//run on page to update then navbar//
document.addEventListener('DOMEContentLoaded', () =>{
updateAuthLinks()
})
//update the visibility of loginError, register and logout link//
function updateAuthLinks(){
  if(IsLoggedIn){
    loginLink.style.display = 'none'
    registerLink.style.display = 'none'
    logoutBtn.style.display = 'block'
  }else{
    loginLink.style.display = 'inline'
    registerLink.style.display ='inline'
    logoutBtn.style.display ='none'
  }
}

//update visibility of loginError, register and logout link//
function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}

function isValidPassword(password){
    return password.length >= 8
}

//login//
const loginForm = document.getElementById('loginForm')
const loginError =document.getElementById('loginError')
//Basic validations//
if(!email || !password){
    loginError.textContent = 'All fields are required'
    return
}
if(!isValidEmail){
    loginError.textContent = 'please enter a valid Email adress'
    return
}
const registeredUser = JSON.parse(localStorage.getItem
    ('registeredUser')
)

if(!registeredUser || registeredUser.email !== email ||
    registeredUser.password !== password
){
    loginError.textContent = 'invalid Email or Password'
    return
}
localStorage.setItem('authenticatedUser', 'true')
window.location.href = 'dashboard.html'

//Registration//
const registerForm = document.getElementById('registerForm')
const registerError = document.getElementById('registerError')