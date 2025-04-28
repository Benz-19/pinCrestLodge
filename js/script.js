//Menu
// JavaScript to handle menu toggling
document.getElementById('menuButton').onclick = function () {
  document.getElementById('mobile-nav').style.width = "100%";
}
document.querySelector('.closebtn').onclick = function () {
  document.getElementById('mobile-nav').style.width = "0%";
}

function closeMenu() {
  document.getElementById('mobile-nav').style.width = "0%";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('#mobile-nav .overlay-content a').forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu(); // Closes the mobile menu when a link is clicked
  });
});


// Get all slides
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0; //Keeps track of the slide that is being displayed
  const slides = document.querySelectorAll(".slide");  //creates a NodeList

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active"); // It ensures that the active class is removed from the previous slide before the function adds it to the current slide.
      if (i === index) {
        slide.classList.add("active"); // Adds the active class to the next slides making it visible
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 9000); // Changes the slide every 9 seconds
});



// Define counters with their respective target values and maximum limits
//counters is an array of objects
const counters = [
  { id: 'customers', target: 4, triggered: false }, // Triggered is used to keep track of if the target is met. If it is met, its value becomes True
  { id: 'apartments', target: 12, triggered: false },
  { id: 'bedrooms', target: 59, triggered: false },
  { id: 'branches', target: 3, triggered: false }
];

// Function to count numbers up to a target value
function count(counter, duration) {
  let current = 0;
  const countInterval = Math.ceil(duration / counter.target);  //countInterval = time interval btw each increment
  const element = document.getElementById(counter.id).querySelector('.counter-value');
  const timer = setInterval(() => {
    if (current < counter.target) {
      current++;
      element.textContent = current;
    } else {
      clearInterval(timer); // Stop counting when target is reached
    }
  }, countInterval);
}

// Function that triggers counting when the element is scrolled into view
function startCounting() {
  const duration = 2000; // Duration in milliseconds

  counters.forEach(counter => {
    if (!counter.triggered) {
      count(counter, duration);
      counter.triggered = true; // Mark the counter as triggered
    }
  });
}

// Event listener for when the element comes into view
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const counters_elm = document.querySelectorAll('.counter');
    counters_elm.forEach(counter => {
      const elementPosition = counter.getBoundingClientRect().top; //it calculates the position of the element relative to the viewport 
      const screenPosition = window.innerHeight / 1.3;  //viewPort's height
      if (elementPosition < screenPosition) {
        startCounting();
      }
    });
  });
});

