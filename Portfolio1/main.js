const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Media query for screens with a maximum width of 680px
if (window.matchMedia('(max-width: 950px)').matches) {
    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}
if (window.matchMedia('(max-width: 680px)').matches) {
    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}


if (window.matchMedia('(max-width: 470px)').matches) {
    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}
if (window.matchMedia('(max-width: 430px)').matches) {
    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  
    navList.classList.remove('active');


    const navItems = document.querySelectorAll('.navlist a');
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            
            navList.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});



const checkbox = document.getElementById('check');
        const navlist = document.querySelector('.navlist');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                navlist.style.right = '0';
            } else {
                navlist.style.right = '-100%';
            }
        });
// Function to handle smooth scrolling
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - header.offsetHeight,
      behavior: 'smooth',
    });
  }
}

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 120);
});

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Media query for screens with a maximum width of 950px
if (window.matchMedia('(max-width: 950px)').matches) {
  menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('active');
  });
}

// Code for handling smooth scrolling when links are clicked
const navItems = document.querySelectorAll('.navlist a');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the target from the href attribute
    const target = item.getAttribute('href');

    // Close the mobile menu (if open)
    navList.classList.remove('active');
    menuIcon.classList.remove('active');

    // Smooth scroll to the target section
    smoothScroll(target);
  });
});

// Handle checkbox change (for mobile menu)
const checkbox = document.getElementById('check');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navlist.style.right = '0';
  } else {
    navlist.style.right = '-100%';
  }
});

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Optional: Scroll to top button functionality
const scrollToTopButton = document.getElementById('scroll-to-top-button');
if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', scrollToTop);
}
