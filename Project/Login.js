const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btnPopUp = document.querySelector(".buttonLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});