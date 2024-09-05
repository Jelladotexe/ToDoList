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