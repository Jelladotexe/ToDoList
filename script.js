let sky = document.getElementById('sky');
let sea = document.getElementById('sea');
let grass = document.getElementById('grass');
let flower = document.getElementById('flower');
let dirt = document.getElementById('dirt');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    cloud1.style.top = value * -0.5 + 'px';
    cloud2.style.top = value * -0.5 + 'px';
    
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link'); 
const registerLink = document.querySelector('.register-link'); 
const btnPopup = document.querySelector('.btnLogin-popup'); 
const iconClose = document.querySelector('.icon-close'); 


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});