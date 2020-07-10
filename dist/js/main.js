// select DOM items

const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('nav-items');

// Set Initial state of Menu

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {
        menuBtn.classList.add('close');

    } else {
        
    }
}
