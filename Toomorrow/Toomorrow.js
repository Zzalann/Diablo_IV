document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const links = document.querySelector('.linkek');

    menuIcon.addEventListener('click', function() {
        const currentDisplayStyle = window.getComputedStyle(links).getPropertyValue('display');

        if (currentDisplayStyle === 'none' || currentDisplayStyle === '') {
            links.style.display = 'flex';
        } else {
            links.style.display = 'none';
        }
    });

    // Ellenőrizzük a képernyő szélességét, és csak kis képernyőn jelenítjük meg alapértelmezetten a listát
    function checkScreenWidth() {
        if (window.innerWidth <= 958) {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
        }
    }

    // Az ablak méretének változásakor ellenőrizzük újra a képernyő szélességét
    window.addEventListener('resize', checkScreenWidth);

    // Oldal betöltésekor is ellenőrizzük az ablak szélességét
    checkScreenWidth();
});
