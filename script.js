// Mobile Navigation Fix
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle menu open/close
    navLinks.classList.toggle('nav-active');

    // Animate links: fade in when opening, fade out when closing
    navItems.forEach((item, index) => {
        if (navLinks.classList.contains('nav-active')) {
            // Opening: add fade-in animation
            item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            item.style.opacity = '1';
        } else {
            // Closing: reset animation and hide
            item.style.animation = '';
            item.style.opacity = '0';
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
});

// Dark/Light Mode Toggle (unchanged)
const toggleSwitch = document.querySelector('#theme-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});
