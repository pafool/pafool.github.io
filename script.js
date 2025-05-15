// Whiteboard JavaScript for pafool.github.io

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add a slight random rotation to text elements for a more hand-drawn feel
    const textElements = document.querySelectorAll('h1, h2, h3, p, li');
    
    textElements.forEach(element => {
        // Generate a small random rotation between -1 and 1 degrees
        const randomRotation = (Math.random() * 2 - 1).toFixed(1);
        element.style.transform = `rotate(${randomRotation}deg)`;
    });
    
});