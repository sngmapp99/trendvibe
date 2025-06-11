// DOM Elements
const navHamburger = document.getElementById('nav-hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const contactForm = document.querySelector('.contact-form');

// Mobile Navigation Toggle
navHamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navHamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navHamburger.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sequential Typing Animation for Hero Title
function typeWriter(element, text, speed = 40) {
    return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        element.style.opacity = '1'; // Make element visible when typing starts
        element.style.borderRight = '2px solid rgba(255,255,255,0.8)';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = 'none';
                    resolve();
                }, 150);
            }
        }
        
        type();
    });
}

// Initialize sequential typing effect when page loads
async function startHeroTyping() {
    const line1 = document.querySelector('.hero-line-1');
    const line2 = document.querySelector('.hero-line-2');
    const line3 = document.querySelector('.hero-line-3');
    
    if (line1 && line2 && line3) {
        const text1 = line1.textContent;
        const text2 = line2.textContent;
        const text3 = line3.textContent;
        
        // Wait a bit before starting
        await new Promise(resolve => setTimeout(resolve, 400));
        
        // Type each line sequentially
        await typeWriter(line1, text1, 40);
        await new Promise(resolve => setTimeout(resolve, 100));
        await typeWriter(line2, text2, 40);
        await new Promise(resolve => setTimeout(resolve, 100));
        await typeWriter(line3, text3, 40);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    startHeroTyping();
});

// Contact Form Handling
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Get form elements
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success message
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
        
    } catch (error) {
        // Error message
        showNotification('An error occurred while sending. Please try again.', 'error');
    } finally {
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .team-member, .tech-item, .stat').forEach(el => {
    observer.observe(el);
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start) + '+';
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Smooth reveal animations
function revealElements() {
    const elements = document.querySelectorAll('.service-card, .team-member, .about-text, .tech-item');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for elements
    document.querySelectorAll('.service-card, .team-member, .about-text, .tech-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger reveal animations
    setTimeout(revealElements, 500);
});

// Add scroll progress indicator
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Initialize scroll indicator
createScrollIndicator();

// Add floating contact button
function createFloatingButton() {
    const floatingBtn = document.createElement('a');
    floatingBtn.href = '#contact';
    floatingBtn.className = 'floating-contact-btn';
    floatingBtn.innerHTML = '<i class="fas fa-envelope"></i>';
    floatingBtn.title = 'Contact Us';
    document.body.appendChild(floatingBtn);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            floatingBtn.classList.add('show');
        } else {
            floatingBtn.classList.remove('show');
        }
    });
}

// Initialize floating button
createFloatingButton();

// Theme toggler (optional)
function createThemeToggler() {
    const toggler = document.createElement('button');
    toggler.className = 'theme-toggler';
    toggler.innerHTML = '<i class="fas fa-moon"></i>';
    toggler.title = 'Dark Mode';
    document.body.appendChild(toggler);
    
    toggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = toggler.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
            toggler.title = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            toggler.title = 'Dark Mode';
        }
    });
}

// Initialize theme toggler
// createThemeToggler(); // Uncomment if you want dark mode toggle

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        // Add your critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();

// SEO and Analytics (placeholder)
function initializeAnalytics() {
    // Add your analytics code here
    console.log('Analytics initialized');
}

// Initialize analytics
initializeAnalytics();

// Accessibility improvements
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels
    document.querySelectorAll('button, a').forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            element.setAttribute('aria-label', 'Button');
        }
    });
}

// Initialize accessibility enhancements
enhanceAccessibility();

console.log('TrendVibe website initialized successfully! 🚀'); 