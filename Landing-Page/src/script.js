// animation for "Learn More" promos

document.addEventListener('DOMContentLoaded', () => {
    const promos = document.querySelectorAll('.featured-promotions figure');
    const options = {
        threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, options);

    promos.forEach((promo) => {
        promo.style.animationPlayState = 'paused'; // Pause animation initially
        observer.observe(promo);
    });
});

// Submenu closes when screen is clicked

document.addEventListener('click', function (event) {
    const menuCheckbox = document.getElementById('menuCheckbox');
    const menu = document.getElementById('menu');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    // Check if the click happened outside the menu or submenu
    if (!menu.contains(event.target) && event.target !== menuCheckbox) {
        // Close the main menu
        menuCheckbox.checked = false;

        // Close all submenus
        submenuToggles.forEach(toggle => {
            toggle.checked = false;
        });
    }
});

// Ensure submenus close when the menu itself is closed
document.getElementById('menuCheckbox').addEventListener('change', function () {
    if (!this.checked) {
        const submenuToggles = document.querySelectorAll('.submenu-toggle');
        submenuToggles.forEach(toggle => {
            toggle.checked = false;
        });
    }
});
