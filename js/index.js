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
