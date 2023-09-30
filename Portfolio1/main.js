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
