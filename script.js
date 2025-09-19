// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-menu-close');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', function() {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        });
    }
    
    // Mobile dropdown toggles
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const icon = this.querySelector('svg');
            
            if (target.classList.contains('grid-rows-[0fr]')) {
                target.classList.remove('grid-rows-[0fr]');
                target.classList.add('grid-rows-[1fr]', 'pb-2');
                icon.style.transform = 'rotate(180deg)';
            } else {
                target.classList.add('grid-rows-[0fr]');
                target.classList.remove('grid-rows-[1fr]', 'pb-2');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});