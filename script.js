// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validación básica
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                markInvalid(nameInput, 'Por favor, ingresa tu nombre');
                isValid = false;
            } else {
                markValid(nameInput);
            }
            
            if (emailInput.value.trim() === '') {
                markInvalid(emailInput, 'Por favor, ingresa tu email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                markInvalid(emailInput, 'Por favor, ingresa un email válido');
                isValid = false;
            } else {
                markValid(emailInput);
            }
            
            if (messageInput.value.trim() === '') {
                markInvalid(messageInput, 'Por favor, ingresa tu mensaje');
                isValid = false;
            } else {
                markValid(messageInput);
            }
            
            if (isValid) {
                // Aquí iría el código para enviar el formulario
                // Como esto es un ejemplo, mostraremos un mensaje de éxito
                alert('¡Gracias por tu mensaje! Te contactaré pronto.');
                contactForm.reset();
            }
        });
    }
    
    function markInvalid(input, message) {
        input.classList.add('invalid');
        
        // Crear mensaje de error si no existe
        let errorMessage = input.nextElementSibling;
        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.style.color = 'red';
            errorMessage.style.fontSize = '0.8rem';
            errorMessage.style.marginTop = '5px';
            input.parentNode.insertBefore(errorMessage, input.nextElementSibling);
        }
        
        errorMessage.textContent = message;
    }
    
    function markValid(input) {
        input.classList.remove('invalid');
        
        // Eliminar mensaje de error si existe
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animación para mostrar proyectos cuando se hace scroll
    const projectCards = document.querySelectorAll('.project-card');
    
    window.addEventListener('scroll', checkProjectCards);
    
    function checkProjectCards() {
        const triggerBottom = window.innerHeight * 0.8;
        
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicialización
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0
