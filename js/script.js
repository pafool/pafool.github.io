// Main JavaScript file for pafool.github.io

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Project Filtering System
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Check if fields are empty
            if (!name.value.trim()) {
                highlightField(name, true);
                valid = false;
            } else {
                highlightField(name, false);
            }
            
            if (!email.value.trim()) {
                highlightField(email, true);
                valid = false;
            } else if (!isValidEmail(email.value)) {
                highlightField(email, true);
                valid = false;
            } else {
                highlightField(email, false);
            }
            
            if (!subject.value.trim()) {
                highlightField(subject, true);
                valid = false;
            } else {
                highlightField(subject, false);
            }
            
            if (!message.value.trim()) {
                highlightField(message, true);
                valid = false;
            } else {
                highlightField(message, false);
            }
            
            if (valid) {
                // Form is valid, display a message since this doesn't actually submit yet
                alert('This form is not yet connected to a backend. In a real implementation, your message would be sent now. Please see the form disclaimer for setup information.');
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to highlight invalid fields
    function highlightField(field, isInvalid) {
        if (isInvalid) {
            field.style.borderColor = '#dc3545';
        } else {
            field.style.borderColor = '';
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add animation when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .service-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial check and add event listener
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // GitHub API Integration
    // Note: In a real implementation, you might want to use the GitHub API
    // to display your actual repositories and contributions
    // This would require setting up authentication or using a token
    
    // For now, we'll just create a placeholder for the future integration
    const githubWidget = document.querySelector('.github-widget');
    
    if (githubWidget) {
        // This placeholder could be replaced with actual GitHub API calls
        const githubUsername = 'pafool';
        
        // You'd typically make an API call like:
        // fetch(`https://api.github.com/users/${githubUsername}/repos`)
        //   .then(response => response.json())
        //   .then(data => {
        //      // Process and display the repositories
        //   });
    }
});