// method brings navbar down by togglin class

let hamburger = document.getElementById('hamburger');
let responsive = document.getElementById('responsive');

function navbar() {
    responsive.classList.toggle('active');
    if (hamburger.classList.contains('bi-list')) {
        hamburger.classList.replace('bi-list', 'bi-x-lg');
    } else {
        hamburger.classList.replace('bi-x-lg', 'bi-list');
    }
}
// dark Mode toggler method
let sun1 = document.getElementById('sun1');
let sun2 = document.getElementById('sun2');
document.querySelectorAll('#sun1','#sun2').forEach(function(element) {
    element.addEventListener('click',darkMode);
});

function darkMode(){
    // icon changes on click
    if (sun1.classList.contains('bi-brightness-high-fill')){
        sun1.classList.replace('bi-brightness-high-fill','bi-moon-fill');
        sun2.classList.replace('bi-brightness-high-fill','bi-moon-fill');
    } else {
        sun1.classList.replace('bi-moon-fill','bi-brightness-high-fill');
        sun2.classList.replace('bi-moon-fill','bi-brightness-high-fill');
    }
    document.body.classList.toggle('darkmode')
}
