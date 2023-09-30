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
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navlist a');

// Function to add or remove the "sticky" class based on scroll position
function toggleStickyHeader() {
  const scrollPosition = window.scrollY;
  const sectionTop = sections[0].offsetTop; // Assumes the first section determines when to make the header sticky

  if (scrollPosition >= sectionTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', toggleStickyHeader);
window.addEventListener('resize', toggleStickyHeader);

// Function to handle smooth scrolling when links are clicked
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const target = item.getAttribute('href');
    navList.classList.remove('active'); // Close the mobile menu if open
    menuIcon.classList.remove('active');

    // Smooth scroll to the target section
    smoothScroll(target);
  });
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

