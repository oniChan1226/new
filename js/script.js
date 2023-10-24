// mobile navbar
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    
    // Check if the menu has 'top-[14%]' class
    const isOpen = menu.classList.contains('top-[14%]');

    // Toggle the 'top' property based on the current state
    menu.classList.toggle('top-[14%]', !isOpen);
    menu.classList.toggle('top-[-100%]', isOpen);
});



// darkMode
const darkModeToggle = document.getElementById("darkModeToggle");
const darkIcon = document.getElementById("dark-icon");
const body = document.documentElement;
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark', isDarkMode);
    if(isDarkMode){
        darkIcon.classList.remove('fa-sun');
        darkIcon.classList.add('fa-moon');
    }
    else{
        darkIcon.classList.remove('fa-moon');
        darkIcon.classList.add('fa-sun');
    }
})

//hidden scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        }
        else {
            entry.target.classList.remove('show-scroll');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach((el) => observer.observe(el));

//cards
const observer_2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll-cards');
        }
        else {
            entry.target.classList.remove('show-scroll-cards');
        }
    });
});

const hiddenElements_2 = document.querySelectorAll('.hidden-scroll-cards');
hiddenElements_2.forEach((el) => observer_2.observe(el));

//fade in element
// Get all elements with the class "fade-in-element"
const fadeElements = document.querySelectorAll('.fade-in-element');

// Set up the Intersection Observer
const observer_3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2, // The element becomes visible when 20% is visible
});

// Observe each element with the class "fade-in-element"
fadeElements.forEach(element => {
  observer_3.observe(element);
});

//fade in element bottom
// Get all elements with the class "fade-in-element"
const fadeElements_2 = document.querySelectorAll('.fade-in-element-bottom');

// Set up the Intersection Observer
const observer_4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2, // The element becomes visible when 20% is visible
});

// Observe each element with the class "fade-in-element"
fadeElements_2.forEach(element => {
  observer_4.observe(element);
});

//text-hover



//slider
// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;

// function updateSlider() {
//     slider.style.transform = `translateX(${-currentIndex * 100}vw)`;
// }

// function showNextSlide() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateSlider();
// }

// function showPrevSlide() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateSlider();
// }

// // Add event listeners for navigation buttons
// prevBtn.addEventListener('click', showPrevSlide);
// nextBtn.addEventListener('click', showNextSlide);

// // Implement automatic slide change (optional)
// setInterval(showNextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)
