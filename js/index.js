// method brings navbar down by togglin class

    let hamburger = document.querySelector(".hamburger");
    hamburger.onclick = navbar; 
    function navbar(){
        let navbar = document.querySelector(".nav-bar");
        navbar.classList.toggle("active");
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
