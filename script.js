document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para el menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú móvil al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. Lógica básica para el formulario de contacto
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(evento) {
        // Prevenir que la página se recargue (comportamiento por defecto)
        evento.preventDefault();
        
        // Acá se podría agregar código para enviar los datos por fetch/AJAX
        // Por ahora, solo mostramos una alerta para cumplir el requisito
        alert('¡Gracias por tu mensaje! El formulario fue procesado con JavaScript.');
        
        // Limpiar el formulario
        contactForm.reset();
    });

});