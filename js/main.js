// Main JavaScript for Latvian Horses static website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Open mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('visible');
            body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
    }

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('visible');
            mobileMenu.classList.add('hidden');
            body.style.overflow = '';
        }
    }

    // Mobile accordion functionality
    const accordionToggles = document.querySelectorAll('.mobile-accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const icon = this.querySelector('svg');
            
            if (target && icon) {
                if (target.classList.contains('open')) {
                    target.classList.remove('open');
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    // Close other open accordions
                    accordionToggles.forEach(otherToggle => {
                        const otherTargetId = otherToggle.getAttribute('data-target');
                        const otherTarget = document.getElementById(otherTargetId);
                        const otherIcon = otherToggle.querySelector('svg');
                        if (otherTarget && otherTarget !== target) {
                            otherTarget.classList.remove('open');
                            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                        }
                    });
                    
                    target.classList.add('open');
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation and submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    
                    // Remove error styling on input
                    field.addEventListener('input', function() {
                        if (this.value.trim()) {
                            this.classList.remove('border-red-500');
                        }
                    });
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('border-red-500');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Show error message
                showNotification('Lūdzu, aizpildiet visus obligātos laukus pareizi.', 'error');
            }
        });
    });

    // Newsletter subscription handling
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate API call
                showNotification('Paldies par abonēšanu! Drīz saņemsiet apstiprinājumu.', 'success');
                this.reset();
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        switch (type) {
            case 'success':
                notification.classList.add('bg-green-500', 'text-white');
                break;
            case 'error':
                notification.classList.add('bg-red-500', 'text-white');
                break;
            default:
                notification.classList.add('bg-blue-500', 'text-white');
        }
        
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <span>${message}</span>
                <button class="ml-2 text-white/80 hover:text-white" onclick="this.parentElement.parentElement.remove()">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        imageObserver.observe(img);
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
        </svg>
    `;
    scrollToTopBtn.className = `fixed bottom-6 right-6 z-40 p-3 bg-primary text-white rounded-full shadow-lg 
                                transition-all duration-300 opacity-0 pointer-events-none hover:bg-red-800 hover:scale-110`;
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize tooltips if needed
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    tooltipTriggers.forEach(trigger => {
        let tooltip = null;
        
        trigger.addEventListener('mouseenter', function() {
            const text = this.getAttribute('data-tooltip');
            tooltip = document.createElement('div');
            tooltip.className = 'absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none';
            tooltip.textContent = text;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
        });
        
        trigger.addEventListener('mouseleave', function() {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });
    });

    // Performance optimization: Defer non-critical operations
    setTimeout(() => {
        // Initialize any heavy operations here
        console.log('Latvian Horses website loaded successfully');
    }, 100);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Export for global access if needed
window.LatvianHorses = {
    debounce,
    throttle
};