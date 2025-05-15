// Whiteboard JavaScript for pafool.github.io

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add a slight random rotation to text elements for a more hand-drawn feel
    const textElements = document.querySelectorAll('h1, h2, h3, p, li');
    
    textElements.forEach(element => {
        // Skip elements that already have marker classes to avoid overriding them
        if (!element.classList.contains('marker-blue') && 
            !element.classList.contains('marker-red') && 
            !element.classList.contains('marker-green') &&
            !element.classList.contains('marker-black')) {
            
            // Generate a small random rotation between -1 and 1 degrees
            const randomRotation = (Math.random() * 2 - 1).toFixed(1);
            element.style.transform = `rotate(${randomRotation}deg)`;
        }
    });
    
    // Add "marker squeak" visual effect when hovering over marker elements
    const markerElements = document.querySelectorAll('.marker-blue, .marker-red, .marker-green, .marker-black');
    
    markerElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Add a subtle visual effect
            element.style.textShadow = '0 0 1px rgba(0,0,0,0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.textShadow = 'none';
        });
    });
    
    // Add eraser functionality - clicking an eraser will clear nearby text
    const erasers = document.querySelectorAll('.eraser');
    
    erasers.forEach(eraser => {
        eraser.style.cursor = 'pointer';
        
        eraser.addEventListener('click', () => {
            // Visual feedback
            eraser.style.transform = 'scale(0.95)';
            setTimeout(() => {
                eraser.style.transform = 'scale(1)';
            }, 200);
            
            // Find a random paragraph or list item and "erase" it temporarily
            const textElements = Array.from(document.querySelectorAll('p, li'));
            
            if (textElements.length > 0) {
                const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
                const originalOpacity = randomElement.style.opacity;
                
                // Create erasing effect
                randomElement.style.opacity = '0.2';
                
                // Restore after 2 seconds
                setTimeout(() => {
                    randomElement.style.opacity = originalOpacity || '1';
                }, 2000);
            }
        });
    });
});