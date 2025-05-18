// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animation elements
    const introContainer = document.querySelector('.intro-container');
    const whiteboardContainer = document.querySelector('.whiteboard-container');
    const book = document.querySelector('.book');
    const bookContainer = document.querySelector('.book-container');
    const frontCover = document.querySelector('.front-cover');
    const bookPage = document.querySelector('.book-page');
    
    // Set initial states
    gsap.set(book, { 
        rotationX: 0,
        rotationZ: 0,
        transformPerspective: 1000,
        opacity: 1,
        scale: 1
    });
    
    // Make sure the cover is closed at first
    gsap.set(frontCover, { 
        transformOrigin: "left center",
        rotationY: 0,
        zIndex: 2
    });
    
    // Book page setup
    gsap.set(bookPage, { 
        transformOrigin: "left center",
        zIndex: 1,
        rotationY: 0
    });
    
    // Create a timeline for each click animation
    const timeline = gsap.timeline({
        paused: true
    });
    
    // Book open animation (used for click)
    timeline
        .to(frontCover, { 
            duration: 1, 
            rotationY: -180, 
            ease: "power2.inOut"
        });
    
    // Interaction handling
    let clickCount = 0;
    
    // Add click listener to the book
    bookContainer.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount <= 4) {
            // For first 4 clicks, just open the book
            timeline.play(0); // Play from the beginning
            
            // After animation completes, close the book again
            setTimeout(() => {
                timeline.reverse();
            }, 1500);
        } else if (clickCount === 5) {
            // On the 5th click, transition to the main site
            timeline.play(0);
            
            // Create a zoom in effect
            gsap.to(book, {
                duration: 1.5,
                scale: 4,
                ease: "power3.in",
                onComplete: function() {
                    // Show main content and hide intro
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
                    
                    // Remove intro container
                    setTimeout(() => {
                        introContainer.remove();
                    }, 500);
                }
            });
        }
    });
});