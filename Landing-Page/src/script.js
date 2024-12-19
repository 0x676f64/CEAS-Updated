document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const submenuLinks = document.querySelectorAll('li > a'); // All top-level links
    const submenus = document.querySelectorAll('.submenu'); // All submenus

    // Toggle main menu visibility
    menuToggle.addEventListener('click', () => {
        const isActive = menu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Toggle visibility of submenus
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const submenu = e.target.nextElementSibling; // Get the submenu
            if (submenu && submenu.classList.contains('submenu')) {
                e.preventDefault(); // Prevent default anchor behavior
                const isActive = submenu.classList.toggle('active');
                // Close other submenus
                submenus.forEach(sm => {
                    if (sm !== submenu) {
                        sm.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
            submenus.forEach(submenu => submenu.classList.remove('active'));
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 688) {
            menu.classList.remove('active');
            submenus.forEach(submenu => submenu.classList.remove('active'));
        }
    });
});
