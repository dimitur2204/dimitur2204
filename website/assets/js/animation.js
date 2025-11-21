document.addEventListener('DOMContentLoaded', () => {
    const menuTexts = document.querySelectorAll('.menu-text');
    
    menuTexts.forEach((element, menuIndex) => {
        const text = element.getAttribute('data-text');
        element.innerHTML = '';
        
        const chars = [];
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            element.appendChild(span);
            chars.push(span);
        });
        
        // Initial animation on page load
        gsap.from(chars, {
            opacity: 0,
            y: 100,
            rotateX: -90,
            stagger: 0.05,
            delay: menuIndex * 0.3,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
        
        // Hover animation
        const menuLink = element.closest('.menu-link');
        const menuItem = menuLink.closest('.menu-item');
        
        menuLink.addEventListener('mouseenter', () => {
            gsap.to(chars, {
                y: -10,
                color: 'var(--accent-color)',
                stagger: {
                    each: 0.03,
                    from: "start"
                },
                duration: 0.4,
                ease: "power2.out"
            });
            
            // Subtle scale effect
            gsap.to(menuItem, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        menuLink.addEventListener('mouseleave', () => {
            gsap.to(chars, {
                y: 0,
                color: 'var(--text-color)',
                stagger: {
                    each: 0.03,
                    from: "start"
                },
                duration: 0.4,
                ease: "power2.inOut"
            });
            
            gsap.to(menuItem, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
        
        // Magnetic effect - menu item follows mouse
        menuLink.addEventListener('mousemove', (e) => {
            const rect = menuItem.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.15;
            const deltaY = (e.clientY - centerY) * 0.15;
            
            gsap.to(menuItem, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        menuLink.addEventListener('mouseleave', () => {
            gsap.to(menuItem, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
});
