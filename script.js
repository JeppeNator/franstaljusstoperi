// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Tab functionality
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked trigger
            trigger.classList.add('active');
            
            // Show corresponding content
            const tabId = trigger.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! In a real implementation, this would send your message.');
            contactForm.reset();
        });
    }
    
    // Service button click handlers
    const serviceButtons = document.querySelectorAll('.btn');
    serviceButtons.forEach(button => {
        if (button.textContent.trim() === 'Stöpning') {
            button.addEventListener('click', () => {
                // Find and click the services tab
                const servicesTab = document.querySelector('[data-tab="services"]');
                servicesTab.click();
                
                // Scroll to services section
                const servicesSection = document.querySelector('.main-content');
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
        
        if (button.textContent.trim() === 'Våra stöp') {
            button.addEventListener('click', () => {
                // Find and click the services tab
                const servicesTab = document.querySelector('[data-tab="services"]');
                servicesTab.click();

                const contactSection = document.querySelector('.stop-section');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        if (button.textContent.trim() === 'Bokning') {
            button.addEventListener('click', () => {
                // Find and click the services tab
                const servicesTab = document.querySelector('[data-tab="services"]');
                servicesTab.click();

                const contactSection = document.querySelector('.bokning-section');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
    
    // Add responsive navigation for mobile (optional enhancement)
    function checkMobile() {
        return window.innerWidth < 768;
    }
    
    // Add simple image lazy loading
    const images = document.querySelectorAll('img');
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        // This is a simple implementation - a production site might use a more robust solution
        const lazyLoad = function() {
            let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
            if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
                return;
            }
            
            lazyImages.forEach(function(lazyImage) {
                if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && 
                     lazyImage.getBoundingClientRect().bottom >= 0) && 
                    getComputedStyle(lazyImage).display !== 'none') {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                }
            });
        };
        
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
});