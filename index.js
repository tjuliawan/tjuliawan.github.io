
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const formlogin = document.querySelector('.form-box.login')
const btnLogin = document.getElementById('btnLoginPopup');
const wrapper = document.getElementById('wrapper');
const btnLoginClose = document.getElementById('btnLoginClose');



  
  
  
  
  
  




btnLogin.addEventListener('click', function(){
    wrapper.style.display = "block";
    });

btnLoginClose.addEventListener('click', function(){
    wrapper.style.display = "none";
    });

registerLink.addEventListener('click', function(){
    formlogin.style.display = "none";
    });

loginLink.addEventListener('click', function(){
    formlogin.style.display = "block";
});




