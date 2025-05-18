// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animation sequence
    const introContainer = document.querySelector('.intro-container');
    const whiteboardContainer = document.querySelector('.whiteboard-container');
    const book = document.querySelector('.book');
    const frontCover = document.querySelector('.front-cover');
    const bookPage = document.querySelector('.book-page');
    
    // Set initial states - book is flat on desk with spine on the left
    gsap.set(book, { 
        rotationX: 0, // Flat on desk
        rotationZ: 0, // No rotation, spine on left
        transformPerspective: 1000,
        opacity: 1, // Fully visible from the start
        scale: 1 // Normal size
    });
    
    // Make sure the cover is on top of the page at first
    gsap.set(frontCover, { 
        transformOrigin: "left center", // Hinge at left side
        rotationY: 0,
        zIndex: 2
    });
    
    // Make sure the page is flat on the desk
    gsap.set(bookPage, { 
        transformOrigin: "left center", // Hinge at left side
        zIndex: 1,
        rotationY: 0
    });
    
    // Create the timeline for the animation sequence
    const timeline = gsap.timeline({
        onComplete: function() {
            // After animation completes, show main content and remove intro
            setTimeout(() => {
                whiteboardContainer.classList.remove('hidden');
                whiteboardContainer.classList.add('show-content');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
                
                // Add slight random rotation to text elements for hand-drawn feel
                const textElements = document.querySelectorAll('h1, h2, h3, p, li');
                textElements.forEach(element => {
                    // Generate a small random rotation between -1 and 1 degrees
                    const randomRotation = (Math.random() * 2 - 1).toFixed(1);
                    element.style.transform = `rotate(${randomRotation}deg)`;
                });
                
                // Remove intro container after transition completes
                setTimeout(() => {
                    introContainer.remove();
                }, 500);
            }, 500);
        }
    });
    
    // Proper animation sequence - book is already visible on the desk
    timeline
        // Small pause to establish the scene with book already visible
        .to({}, { duration: 0.8 })
        
        // Open the front cover to the right
        .to(frontCover, { 
            duration: 1.5, 
            rotationY: -180, // Flip cover to the right
            ease: "power2.inOut"
        })
        
        // Small pause to see the white page
        .to({}, { duration: 0.8 })
        
        // Zoom into the white page
        .to(book, { 
            duration: 1.8, 
            scale: 4, 
            opacity: 0,
            ease: "power3.in" 
        });
        
    // Play the animation immediately
    timeline.play();
});