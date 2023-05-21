// method brings navbar down by togglin class

let hamburger = document.querySelector(".hamburger");
hamburger.onclick = navbar;

function navbar() {
  if (window.innerWidth < 900) {
    let navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
  }
}


// dark Mode toggler method
let sun1 = document.getElementById('sun1');
let sun2 = document.getElementById('sun2');
document.querySelectorAll('#sun1','#sun2').forEach(function(element) {
    element.addEventListener('click',darkMode);
});

function darkMode(){
    document.body.classList.toggle('darkmode')
}
