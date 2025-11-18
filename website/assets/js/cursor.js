class FluidCursor {
    constructor() {
        this.cursor = null;
        this.cursorInner = null;
        this.cursorOuter = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.outerX = 0;
        this.outerY = 0;
        this.innerX = 0;
        this.innerY = 0;
        this.isHovering = false;
        
        this.init();
    }
    
    init() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'fluid-cursor';
        this.cursor.innerHTML = `
            <div class="cursor-inner"></div>
            <div class="cursor-outer"></div>
        `;
        document.body.appendChild(this.cursor);
        
        this.cursorInner = this.cursor.querySelector('.cursor-inner');
        this.cursorOuter = this.cursor.querySelector('.cursor-outer');
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        const interactiveElements = document.querySelectorAll('a, button, .menu-link');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.setHoverState(true));
            el.addEventListener('mouseleave', () => this.setHoverState(false));
        });
        
        this.animate();
    }
    
    setHoverState(hovering) {
        this.isHovering = hovering;
        if (hovering) {
            this.cursorInner.style.transform = 'translate(-50%, -50%) scale(0.5)';
            this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            this.cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
            this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }
    
    animate() {
        const lerp = (start, end, factor) => start + (end - start) * factor;
        
        this.innerX = lerp(this.innerX, this.mouseX, 0.15);
        this.innerY = lerp(this.innerY, this.mouseY, 0.15);
        
        this.outerX = lerp(this.outerX, this.mouseX, 0.08);
        this.outerY = lerp(this.outerY, this.mouseY, 0.08);
        
        this.cursorInner.style.left = `${this.innerX}px`;
        this.cursorInner.style.top = `${this.innerY}px`;
        
        this.cursorOuter.style.left = `${this.outerX}px`;
        this.cursorOuter.style.top = `${this.outerY}px`;
        
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FluidCursor();
});
