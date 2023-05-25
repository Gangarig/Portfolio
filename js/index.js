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
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Display success message
      let successMessage = document.createElement("h2");
      successMessage.className = "success-message";
      successMessage.textContent = "Message sent successfully. I will contact you soon. :D";
      document.getElementById("successMessage").innerHTML = "";
      document.getElementById("successMessage").appendChild(successMessage);

      // Clear form inputs
      document.getElementById("contactForm").reset();

      // Hide success message after 5 seconds
      setTimeout(function() {
        document.getElementById("successMessage").innerHTML = "";
      }, 5000);
    }
  };
  xhr.send(formData);
});
