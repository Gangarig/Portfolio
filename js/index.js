let hamburger = document.querySelector(".hamburger");
hamburger.onclick = navbar;

function navbar() {
  if (window.innerWidth < 900) {
    let navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
  }
}

let sun1 = document.getElementById('sun1');
let sun2 = document.getElementById('sun2');
document.querySelectorAll('#sun1, #sun2').forEach(function(element) {
  element.addEventListener('click', darkMode);
});

function darkMode() {
  document.body.classList.toggle('darkmode');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let formData = new FormData(this);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", this.action, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Show success toast
        Toastify({
          text: "Message sent successfully. I will contact you soon. :D",
          className: "success",
        }).showToast();
      } else {
        // Show danger toast for error message
        Toastify({
          text: "Something went wrong. Please try again later.",
          className: "danger",
        }).showToast();
      }

      // Clear form inputs
      document.getElementById("contactForm").reset();
    }
  };
  xhr.send(formData);
});


// for Touch screen Devices
// Check if the device has touch support
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  // Add a touch class to the body
  document.body.classList.add('touch');

  // Get all the cards
  const cards = document.querySelectorAll('.card');

  // Add touch event listeners to each card
  cards.forEach((card) => {
    card.addEventListener('touchstart', () => {
      // Toggle the hover class on the current card
      card.classList.toggle('hover');

      // Remove the hover class from all other cards
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove('hover');
        }
      });
    });
  });
}

// Toastify
$(document).ready(function() {
  $("#sendMessageBtn").click(function() {
    Toastify({
      text: "Message Sent Successfully. I will be in touch.",
      className: "success",
    }).showToast();
  });
});
$(document).ready(function() {
  $("#error").click(function() {
    Toastify({
      text: "Something went wrong",
      className: "danger",
    }).showToast();
  });
});

// scrollToTop button
window.onscroll = function() { showScrollToTopButton() };

function showScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
