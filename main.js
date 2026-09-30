document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Aquí podrías añadir más interactividad si lo necesitas
    // Por ejemplo, validación de formularios (aunque para un prototipo, no es estrictamente necesario que envíe datos)
});