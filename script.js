// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(quoteForm);
        const name = quoteForm.querySelector('input[placeholder="Your Name"]').value;
        const email = quoteForm.querySelector('input[placeholder="Your Email"]').value;
        const phone = quoteForm.querySelector('input[placeholder="Your Phone"]').value;
        const service = quoteForm.querySelector('select').value;
        const message = quoteForm.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello JM Screen Repair! I would like a free estimate.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nProject Details: ${message}`;
        
        // Redirect to WhatsApp
        const whatsappURL = `https://wa.me/16892535778?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form
        quoteForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Phone number click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
    });
});
