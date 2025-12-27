// Mobile Navigation + Persistent Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        // Toggle the menu
        navLinks.classList.toggle('nav-active');

        // Fade in/out animation for links
        navItems.forEach((item, index) => {
            if (navLinks.classList.contains('nav-active')) {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            } else {
                item.style.animation = '';
            }
        });

        // Burger to X animation
        burger.classList.toggle('toggle');
    });
}

// Dark/Light Mode Toggle
const toggleSwitch = document.querySelector('#theme-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (toggleSwitch && currentTheme === 'light-mode') {
        toggleSwitch.checked = true;
    }
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
}
