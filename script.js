const menuIcon = document.getElementById('menu');
const navList = document.getElementById('nav-list');

   

// Open the nav bar
const openMenu = () => {
    isOpen = true;
    navList.style.display = 'flex';
    navList.style.height = '100%';
    menuIcon.classList.replace('fa-bars', 'fa-times');
}


// Close the nav menu
const closeMenu = () => {
    isOpen = false;
    navList.style.display = 'none';
    navList.style.height = '64px';
    menuIcon.classList.replace('fa-times', 'fa-bars');
}

// Function to handle onclick listener on the menu icon
let isOpen = false;
const handleMenuClick = () => {
    isOpen ? closeMenu() : openMenu();
}

menuIcon.addEventListener('click', handleMenuClick);