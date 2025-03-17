// Optimización para móviles
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil - cierra al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Si estamos en móvil (detectado por ancho de pantalla)
            if (window.innerWidth <= 768) {
                // Añade un pequeño retraso antes de desplazarse
                setTimeout(() => {
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerOffset = 100; // Mayor offset en móvil
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        });
    });
    
    // Mejora la carga de imágenes en móvil
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }
    
    // Detecta orientación del dispositivo y ajusta layout si es necesario
    window.addEventListener('orientationchange', function() {
        // Pequeño retraso para permitir que el navegador actualice dimensiones
        setTimeout(() => {
            checkProjectCards();
        }, 300);
    });
    
    // Mejora la experiencia táctil
    document.querySelectorAll('.btn, .project-card, .menu a').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, {passive: true});
        
        element.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
    });
});
